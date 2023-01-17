// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const PaymentPeriod = sequelize.define('paymentPeriod', {
    paymentPeriodId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    dateStart: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    dateEnd: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
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
  }, {
    tableName: 'payment_period',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  PaymentPeriod.associate = (models) => {
    PaymentPeriod.belongsTo(models.payment, {
      foreignKey: {
        name: 'paymentIdKey',
        field: 'payment_id',
      },
      targetKey: 'paymentId',
      as: 'payment',
    });
    PaymentPeriod.belongsToMany(models.vehicle, {
      through: 'vehiclePaymentPeriod',
      foreignKey: 'payment_period_id',
      otherKey: 'vehicle_id',
      as: 'vehicleThroughVehiclePaymentPeriods',
    });
  };

  return PaymentPeriod;
};
