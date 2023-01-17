// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Transaction = sequelize.define('transaction', {
    transactionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    amountPaid: {
      type: DataTypes.DOUBLE,
    },
    paymentMode: {
      type: DataTypes.STRING,
    },
    referenceId: {
      type: DataTypes.STRING,
    },
    referenceNumber: {
      type: DataTypes.STRING,
    },
    authorizationNumber: {
      type: DataTypes.STRING,
    },
    subscriptionNumber: {
      type: DataTypes.STRING,
    },
    cardType: {
      type: DataTypes.STRING,
    },
    countryCode: {
      type: DataTypes.STRING,
    },
    returnCode: {
      type: DataTypes.STRING,
    },
    returnMessage: {
      type: DataTypes.STRING,
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
    cardNumber: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'transaction',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  Transaction.associate = (models) => {
    Transaction.belongsTo(models.booking, {
      foreignKey: {
        name: 'bookingIdKey',
        field: 'booking_id',
      },
      targetKey: 'bookingId',
      as: 'booking',
    });
    Transaction.belongsTo(models.bookingAction, {
      foreignKey: {
        name: 'bookingActionIdKey',
        field: 'booking_action_id',
      },
      targetKey: 'bookingActionId',
      as: 'bookingAction',
    });
  };

  return Transaction;
};
