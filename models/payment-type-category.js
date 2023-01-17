// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const PaymentTypeCategory = sequelize.define('paymentTypeCategory', {
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
    paymentTypeCategoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    paymentTypeCategoryCode: {
      type: DataTypes.ENUM('BOOKING','GUARDING'),
      defaultValue: "BOOKING",
      allowNull: false,
    },
    paymentTypeCategoryLabel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'payment_type_category',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  PaymentTypeCategory.associate = (models) => {
    PaymentTypeCategory.belongsTo(models.application, {
      foreignKey: {
        name: 'applicationIdKey',
        field: 'application_id',
      },
      targetKey: 'applicationId',
      as: 'application',
    });
    PaymentTypeCategory.hasMany(models.paymentType, {
      foreignKey: {
        name: 'paymentTypeCategoryIdKey',
        field: 'payment_type_category_id',
      },
      sourceKey: 'paymentTypeCategoryId',
      as: 'paymentTypeCategoryPaymentTypes',
    });
  };

  return PaymentTypeCategory;
};
