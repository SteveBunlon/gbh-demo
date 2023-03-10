// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const VehicleTypeFilter = sequelize.define('vehicleTypeFilter', {
    vehicleTypeFilterId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    vehicleTypeFilterCode: {
      type: DataTypes.STRING,
    },
    vehicleTypeFilterName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exclusive: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(6)'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(6)'),
    },
    displayOrder: {
      type: DataTypes.INTEGER,
    },
    isDefault: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'vehicle_type_filter',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  VehicleTypeFilter.associate = (models) => {
    VehicleTypeFilter.belongsTo(models.application, {
      foreignKey: {
        name: 'applicationIdKey',
        field: 'application_id',
      },
      targetKey: 'applicationId',
      as: 'application',
    });
    VehicleTypeFilter.belongsTo(models.agencyFilter, {
      foreignKey: {
        name: 'agencyFilterIdKey',
        field: 'agency_filter_id',
      },
      targetKey: 'agencyFilterId',
      as: 'agencyFilter',
    });
    VehicleTypeFilter.belongsTo(models.media, {
      foreignKey: {
        name: 'mediaIdKey',
        field: 'media_id',
      },
      targetKey: 'mediaId',
      as: 'media',
    });
    VehicleTypeFilter.belongsToMany(models.vehicleType, {
      through: 'vehicleTypeFilterVehicleType',
      foreignKey: 'vehicle_type_filter_id',
      otherKey: 'vehicle_type_id',
      as: 'vehicleTypeThroughVehicleTypeFilterVehicleTypes',
    });
    VehicleTypeFilter.hasMany(models.vehicleTypeFilterTranslation, {
      foreignKey: {
        name: 'vehicleTypeFilterIdKey',
        field: 'vehicle_type_filter_id',
      },
      sourceKey: 'vehicleTypeFilterId',
      as: 'vehicleTypeFilterVehicleTypeFilterTranslations',
    });
  };

  return VehicleTypeFilter;
};
