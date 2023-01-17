// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Currency = sequelize.define('currency', {
    currencyId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    currencyIsoCode: {
      type: DataTypes.STRING,
    },
    currencySymbol: {
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
  }, {
    tableName: 'currency',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  Currency.associate = (models) => {
    Currency.hasMany(models.booking, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      sourceKey: 'currencyId',
      as: 'bookings',
    });
    Currency.hasMany(models.companyCurrency, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      sourceKey: 'currencyId',
      as: 'companyCurrencies',
    });
  };

  return Currency;
};
