// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Country = sequelize.define('country', {
    countryId: {
      type: DataTypes.INTEGER,
      field: 'country_id',
      primaryKey: true,
      allowNull: false,
    },
    active: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(6)'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(6)'),
    },
    isoCode2: {
      type: DataTypes.STRING,
      field: 'iso_code2',
      allowNull: false,
    },
    isoCode3: {
      type: DataTypes.STRING,
      field: 'iso_code3',
      allowNull: false,
    },
    isoNum: {
      type: DataTypes.INTEGER,
      field: 'iso_num',
      allowNull: false,
    },
  }, {
    tableName: 'country',
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  Country.associate = (models) => {
    Country.belongsToMany(models.company, {
      through: 'companyCountry',
      foreignKey: 'country_id',
      otherKey: 'company_id',
      as: 'companyThroughCompanyCountries',
    });
    Country.hasMany(models.booking, {
      foreignKey: {
        name: 'countryIdKey',
        field: 'country_id',
      },
      sourceKey: 'countryId',
      as: 'bookings',
    });
    Country.hasMany(models.countryTranslation, {
      foreignKey: {
        name: 'countryIdKey',
        field: 'country_id',
      },
      sourceKey: 'countryId',
      as: 'countryTranslations',
    });
    Country.hasMany(models.customer, {
      foreignKey: {
        name: 'countryIdKey',
        field: 'country_id',
      },
      sourceKey: 'countryId',
      as: 'customers',
    });
    Country.hasMany(models.leadForm, {
      foreignKey: {
        name: 'countryIdKey',
        field: 'country_id',
      },
      sourceKey: 'countryId',
      as: 'leadForms',
    });
  };

  return Country;
};