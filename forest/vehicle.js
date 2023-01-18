const { collection, SmartActionLoadHookField, SmartActionLoadHookRequest, RecordsGetter} = require('forest-express-sequelize');
const { vehicle, vehicleType, vehicleTypeLink } = require('../models');
const { Op } = require('sequelize');
const _ = require('lodash');

// This file allows you to add to your Forest UI:
// - Smart actions: https://docs.forestadmin.com/documentation/reference-guide/actions/create-and-manage-smart-actions
// - Smart fields: https://docs.forestadmin.com/documentation/reference-guide/fields/create-and-manage-smart-fields
// - Smart relationships: https://docs.forestadmin.com/documentation/reference-guide/relationships/create-a-smart-relationship
// - Smart segments: https://docs.forestadmin.com/documentation/reference-guide/segments/smart-segments
collection('vehicle', {
  actions: [{
    name: 'Modifier',
    type: 'bulk',
    fields: [{
      field: 'Type Principal',
      type: 'Enum',
    }, {
      field: 'Types Secondaires',
      type: ['Enum'],
    }, {
      field: 'Montant Caution',
      type: 'Number',
    }, {
      field: 'Montant franchise',
      type: 'Number',
    }],
    hooks: {
      load: async ({ fields, request }) => {
        const typePrimaryField = fields.find((f) => f.field === 'Type Principal');
        const typeSecondaryField = fields.find((f) => f.field === 'Types Secondaires');
        const cautionField = fields.find((f) => f.field === 'Montant Caution');
        const franchiseField = fields.find((f) => f.field === 'Montant franchise');

        const ids = await (new RecordsGetter(vehicle, request.user, request.query)).getIdsFromRequest(request);
        const options = {
          where: { vehicleId: ids },
          include: [
            {
              model: vehicleTypeLink,
              as: 'vehicleTypeLinks',
              include: {
                model: vehicleType,
                as: 'vehicleType',
              }
            }
          ]
        }

        const vehicleResults = await vehicle.findAll(options);

        const cautionSet = new Set();
        const accidentSet = new Set();
        const primarySet = new Set();
        const secondary = [];
        vehicleResults.forEach((v) => {
          cautionSet.add(v.deposit);
          accidentSet.add(v.excess);

          const primaryType = v.vehicleTypeLinks.find((vtl) => vtl.primaryLink === 1);
          const secondaryTypes = v.vehicleTypeLinks.reduce((acc, vtl) => {
            if (vtl.primaryLink === 0) {
              acc.push(vtl.vehicleType.name);
            }

            return acc;
          }, []);
          primarySet.add(primaryType?.vehicleType?.name || null);
          secondary.push(secondaryTypes)
        })

        let areSecondaryEqual = true;
        const firstSecondary = secondary[0];
        if (firstSecondary) {
          let i = 1;
          while(areSecondaryEqual && secondary[i]) {
            areSecondaryEqual = _.isEqual(firstSecondary, secondary[i]);
            i = i + 1;
          }
        } else {
          areSecondaryEqual = false;
        }

        typePrimaryField.value = primarySet.size === 1 ? primarySet.keys().next().value : '';
        typeSecondaryField.value = areSecondaryEqual ? secondary[0] : [];
        cautionField.value = cautionSet.size === 1 ? cautionSet.keys().next().value : '';
        franchiseField.value = accidentSet.size === 1 ? accidentSet.keys().next().value : '';

        const types = await (new RecordsGetter(vehicleType, request.user, { timezone: request.query.timezone,  page: { number: '1', size: '200' } })).getAll();
        typePrimaryField.enums = typeSecondaryField.enums = types.map((vt) => vt.name);

        return fields;
      }
    }
  }],
  fields: [],
  segments: [],
});
