// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const BookingStateErp = sequelize.define('bookingStateErp', {
    bookingStateErpId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    bookingStateErpCode: {
      type: DataTypes.STRING,
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
    bookingStateErpError: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'booking_state_erp',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  BookingStateErp.associate = (models) => {
    BookingStateErp.belongsTo(models.bookingAction, {
      foreignKey: {
        name: 'bookingActionIdKey',
        field: 'booking_action_id',
      },
      targetKey: 'bookingActionId',
      as: 'bookingAction',
    });
    BookingStateErp.belongsTo(models.booking, {
      foreignKey: {
        name: 'bookingIdKey',
        field: 'booking_id',
      },
      targetKey: 'bookingId',
      as: 'booking',
    });
  };

  return BookingStateErp;
};