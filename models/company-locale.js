// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const CompanyLocale = sequelize.define('companyLocale', {
    companyLocaleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    isDefault: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'company_locale',
    underscored: true,
    timestamps: false,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  CompanyLocale.associate = (models) => {
    CompanyLocale.belongsTo(models.company, {
      foreignKey: {
        name: 'companyIdKey',
        field: 'company_id',
      },
      targetKey: 'companyId',
      as: 'company',
    });
    CompanyLocale.belongsTo(models.locale, {
      foreignKey: {
        name: 'localeCodeKey',
        field: 'locale_code',
      },
      targetKey: 'localeCode',
      as: 'localeCode',
    });
  };

  return CompanyLocale;
};
