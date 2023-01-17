// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const CivilityTranslation = sequelize.define('civilityTranslation', {
    civilityTranslationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    civilityShortLabel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    civilityLongLabel: {
      type: DataTypes.STRING,
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
    tableName: 'civility_translation',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  CivilityTranslation.associate = (models) => {
    CivilityTranslation.belongsTo(models.locale, {
      foreignKey: {
        name: 'localeCodeKey',
        field: 'locale_code',
      },
      targetKey: 'localeCode',
      as: 'localeCode',
    });
    CivilityTranslation.belongsTo(models.civility, {
      foreignKey: {
        name: 'civilityIdKey',
        field: 'civility_id',
      },
      targetKey: 'civilityId',
      as: 'civility',
    });
  };

  return CivilityTranslation;
};