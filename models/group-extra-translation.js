// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const GroupExtraTranslation = sequelize.define('groupExtraTranslation', {
    groupExtraTranslationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
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
    tableName: 'group_extra_translation',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  GroupExtraTranslation.associate = (models) => {
    GroupExtraTranslation.belongsTo(models.groupExtra, {
      foreignKey: {
        name: 'groupExtraIdKey',
        field: 'group_extra_id',
      },
      targetKey: 'groupExtraId',
      as: 'groupExtra',
    });
    GroupExtraTranslation.belongsTo(models.locale, {
      foreignKey: {
        name: 'localeCodeKey',
        field: 'locale_code',
      },
      targetKey: 'localeCode',
      as: 'localeCode',
    });
  };

  return GroupExtraTranslation;
};
