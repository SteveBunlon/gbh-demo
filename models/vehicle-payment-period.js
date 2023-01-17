// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const VehiclePaymentPeriod = sequelize.define('vehiclePaymentPeriod', {
    vehicleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    paymentPeriodId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    tableName: 'vehicle_payment_period',
    underscored: true,
    timestamps: false,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  VehiclePaymentPeriod.associate = (models) => {
    VehiclePaymentPeriod.belongsTo(models.vehicle, {
      foreignKey: {
        name: 'vehicleIdKey',
        field: 'vehicle_id',
      },
      targetKey: 'vehicleId',
      as: 'vehicle',
    });
    VehiclePaymentPeriod.belongsTo(models.paymentPeriod, {
      foreignKey: {
        name: 'paymentPeriodIdKey',
        field: 'payment_period_id',
      },
      targetKey: 'paymentPeriodId',
      as: 'paymentPeriod',
    });
  };

  return VehiclePaymentPeriod;
};
