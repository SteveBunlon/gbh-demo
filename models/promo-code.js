// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const PromoCode = sequelize.define('promoCode', {
    promoCodeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    promoCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    promoPercentage: {
      type: DataTypes.DOUBLE,
    },
    amountPromo: {
      type: DataTypes.DOUBLE,
    },
    dateStart: {
      type: DataTypes.DATEONLY,
    },
    dateEnd: {
      type: DataTypes.DATEONLY,
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
    promoTypeErp: {
      type: DataTypes.INTEGER,
    },
    promoTypeLabelErp: {
      type: DataTypes.STRING,
    },
    isNumbered: {
      type: DataTypes.INTEGER,
    },
    isUsed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    tableName: 'promo_code',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  PromoCode.associate = (models) => {
    PromoCode.belongsTo(models.branch, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      targetKey: 'branchId',
      as: 'branch',
    });
    PromoCode.belongsTo(models.paymentType, {
      foreignKey: {
        name: 'paymentTypeIdKey',
        field: 'payment_type_id',
      },
      targetKey: 'paymentTypeId',
      as: 'paymentType',
    });
    PromoCode.belongsToMany(models.vehicle, {
      through: 'promoCodeVehicle',
      foreignKey: 'promo_code_id',
      otherKey: 'vehicle_id',
      as: 'vehicleThroughPromoCodeVehicles',
    });
    PromoCode.hasMany(models.booking, {
      foreignKey: {
        name: 'promoCodeIdKey',
        field: 'promo_code_id',
      },
      sourceKey: 'promoCodeId',
      as: 'promoCodeBookings',
    });
    PromoCode.hasMany(models.workflowTask, {
      foreignKey: {
        name: 'promoCodeIdKey',
        field: 'promo_code_id',
      },
      sourceKey: 'promoCodeId',
      as: 'promoCodeWorkflowTasks',
    });
  };

  return PromoCode;
};