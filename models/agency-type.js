// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const AgencyType = sequelize.define('agencyType', {
    agencyTypeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    agencyTypeCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
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
    tableName: 'agency_type',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  AgencyType.associate = (models) => {
    AgencyType.belongsTo(models.company, {
      foreignKey: {
        name: 'companyIdKey',
        field: 'company_id',
      },
      targetKey: 'companyId',
      as: 'company',
    });
    AgencyType.hasMany(models.agency, {
      foreignKey: {
        name: 'agencyTypeIdKey',
        field: 'agency_type_id',
      },
      sourceKey: 'agencyTypeId',
      as: 'agencyTypeAgencies',
    });
    AgencyType.hasMany(models.agencyTypeTranslation, {
      foreignKey: {
        name: 'agencyTypeIdKey',
        field: 'agency_type_id',
      },
      sourceKey: 'agencyTypeId',
      as: 'agencyTypeAgencyTypeTranslations',
    });
  };

  return AgencyType;
};
