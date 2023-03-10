// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const BookingAction = sequelize.define('bookingAction', {
    bookingActionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    actionReference: {
      type: DataTypes.STRING,
    },
    tokenAction: {
      type: DataTypes.STRING,
    },
    amountAction: {
      type: DataTypes.DOUBLE,
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
    tableName: 'booking_action',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  BookingAction.associate = (models) => {
    BookingAction.belongsTo(models.booking, {
      foreignKey: {
        name: 'bookingIdKey',
        field: 'booking_id',
      },
      targetKey: 'bookingId',
      as: 'booking',
    });
    BookingAction.belongsTo(models.workflowTask, {
      foreignKey: {
        name: 'workflowTaskIdKey',
        field: 'workflow_task_id',
      },
      targetKey: 'workflowTaskId',
      as: 'workflowTask',
    });
    BookingAction.belongsTo(models.bookingActionType, {
      foreignKey: {
        name: 'bookingActionTypeIdKey',
        field: 'booking_action_type_id',
      },
      targetKey: 'bookingActionTypeId',
      as: 'bookingActionType',
    });
    BookingAction.belongsTo(models.bookingState, {
      foreignKey: {
        name: 'bookingStateIdKey',
        field: 'booking_state_id',
      },
      targetKey: 'bookingStateId',
      as: 'bookingState',
    });
    BookingAction.hasMany(models.bookingExtra, {
      foreignKey: {
        name: 'bookingActionIdKey',
        field: 'booking_action_id',
      },
      sourceKey: 'bookingActionId',
      as: 'bookingActionBookingExtras',
    });
    BookingAction.hasMany(models.bookingStateErp, {
      foreignKey: {
        name: 'bookingActionIdKey',
        field: 'booking_action_id',
      },
      sourceKey: 'bookingActionId',
      as: 'bookingActionBookingStateErps',
    });
    BookingAction.hasMany(models.transaction, {
      foreignKey: {
        name: 'bookingActionIdKey',
        field: 'booking_action_id',
      },
      sourceKey: 'bookingActionId',
      as: 'bookingActionTransactions',
    });
  };

  return BookingAction;
};
