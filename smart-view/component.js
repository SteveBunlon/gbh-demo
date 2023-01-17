import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { triggerSmartAction, deleteRecords, getCollectionId, loadExternalStyle, loadExternalJavascript } from 'client/utils/smart-view-utils';
import { tracked } from '@glimmer/tracking';
import { alias } from '@ember/object/computed';

export default class extends Component {
  @service store;
  @tracked selectedTypes;
  @tracked columns;
  @tracked rows;

  @alias('selectedTypes.length') count;

  @action
  triggerSmartAction(...args) {
    return triggerSmartAction(this, ...args);
  }

  constructor(...args) {
    super(...args);
    this.selectedTypes = this.store.peekAll('workspace-component')?.find((workspace) => workspace.name === 'carTypes')?._selectedRecords;

    this.vehicleTypeLinkCollection = this.store.peekAll('collection').find(collection => {
      return collection.name === 'vehicleTypeLink'
    });
  }

  @action
  deleteRecords(...args) {
    return deleteRecords(this, ...args);
  }

  async refreshColumns() {
    console.log('Selected Types');
    console.log(this.selectedTypes);
    this.columns = this.selectedTypes.map((selectedType) => {
      return selectedType['forest-name'];
    }).length ? this.selectedTypes.map((selectedType) => {
      return selectedType['forest-name'];
    }) : ['TEST'];

    console.log('COLUMNS', this.columns);

    const typeIds = this.selectedTypes.map(type => type.id).length ? this.selectedTypes.map(type => type.id) : ['1', '2', '11'];
    console.log(typeIds);
    const query = {
      'fields[vehicleTypeLink]': 'active,createdAt,primaryLink,updatedAt,vehicle,vehicleType,vehicleTypeLinkId',
      'fields[vehicleType]': 'name,vehicleTypeId',
      'fields[vehicle]': 'vehicleId,vehicleErpCode',
      filters : `{\"field\":\"vehicleType:vehicleTypeId\",\"operator\":\"in\",\"value\":\"${typeIds.join(',')}\"}`,
      'page[number]': 1,
      'page[size]': 100,
    }
    try {
      const vehicleTypesLink = await this.store.query(this.vehicleTypeLinkCollection.emberModelName, query);
      console.log(vehicleTypesLink);
      this.computeVehicleTypes(vehicleTypesLink);
    } catch(e) {
      console.log('error occured');
      console.log(e);
    }
  }

  computeVehicleTypes(vehicleTypeLinks) {
    this.rows = vehicleTypeLinks.reduce((rows, vehicleTypeLink) => {
      const erpCode = vehicleTypeLink['forest-vehicle']['forest-vehicleErpCode'];
      const deNameSpacedVehiculeType = vehicleTypeLink['forest-vehicleType']['forest-name'];

      if (!rows[erpCode]) {
        rows[erpCode] = {};
      }

      rows[erpCode][deNameSpacedVehiculeType] = vehicleTypeLink['forest-primaryLink'];

      return rows;
    }, {})

    console.log(this.rows);
  }

  @action
  async updateRecords(callback) {
    await this.refreshColumns();
    return callback()
  }
}
