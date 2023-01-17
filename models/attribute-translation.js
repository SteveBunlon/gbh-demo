// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const AttributeTranslation = sequelize.define('attributeTranslation', {
    attributeTranslationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    attributeLabel: {
      type: DataTypes.STRING,
    },
    shortAttributeLabel: {
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
    tableName: 'attribute_translation',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  AttributeTranslation.associate = (models) => {
    AttributeTranslation.belongsTo(models.attribute, {
      foreignKey: {
        name: 'attributeIdKey',
        field: 'attribute_id',
      },
      targetKey: 'attributeId',
      as: 'attribute',
    });
    AttributeTranslation.belongsTo(models.locale, {
      foreignKey: {
        name: 'localeCodeKey',
        field: 'locale_code',
      },
      targetKey: 'localeCode',
      as: 'localeCode',
    });
  };

  return AttributeTranslation;
};
