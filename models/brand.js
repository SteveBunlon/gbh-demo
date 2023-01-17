// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Brand = sequelize.define('brand', {
    brandId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    brandCode: {
      type: DataTypes.STRING,
    },
    brandLabel: {
      type: DataTypes.STRING,
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
    active: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
  }, {
    tableName: 'brand',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  Brand.associate = (models) => {
    Brand.belongsTo(models.media, {
      foreignKey: {
        name: 'mediaIdKey',
        field: 'media_id',
      },
      targetKey: 'mediaId',
      as: 'media',
    });
    Brand.hasMany(models.branch, {
      foreignKey: {
        name: 'brandIdKey',
        field: 'brand_id',
      },
      sourceKey: 'brandId',
      as: 'branches',
    });
  };

  return Brand;
};
