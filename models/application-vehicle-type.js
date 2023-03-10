// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const ApplicationVehicleType = sequelize.define('applicationVehicleType', {
    vehicleTypeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    applicationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    tableName: 'application_vehicle_type',
    underscored: true,
    timestamps: false,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  ApplicationVehicleType.associate = (models) => {
    ApplicationVehicleType.belongsTo(models.application, {
      foreignKey: {
        name: 'applicationIdKey',
        field: 'application_id',
      },
      targetKey: 'applicationId',
      as: 'application',
    });
    ApplicationVehicleType.belongsTo(models.vehicleType, {
      foreignKey: {
        name: 'vehicleTypeIdKey',
        field: 'vehicle_type_id',
      },
      targetKey: 'vehicleTypeId',
      as: 'vehicleType',
    });
  };

  return ApplicationVehicleType;
};
