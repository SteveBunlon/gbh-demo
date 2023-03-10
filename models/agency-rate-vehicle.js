// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const AgencyRateVehicle = sequelize.define('agencyRateVehicle', {
    agencyId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    vehicleRateId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    tableName: 'agency_rate_vehicle',
    underscored: true,
    timestamps: false,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  AgencyRateVehicle.associate = (models) => {
    AgencyRateVehicle.belongsTo(models.agency, {
      foreignKey: {
        name: 'agencyIdKey',
        field: 'agency_id',
      },
      targetKey: 'agencyId',
      as: 'agency',
    });
  };

  return AgencyRateVehicle;
};
