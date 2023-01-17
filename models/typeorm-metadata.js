// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const TypeormMetadata = sequelize.define('typeormMetadata', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    database: {
      type: DataTypes.STRING,
    },
    schema: {
      type: DataTypes.STRING,
    },
    table: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'typeorm_metadata',
    timestamps: false,
  });
  TypeormMetadata.removeAttribute('id');
  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  TypeormMetadata.associate = (models) => {
  };

  return TypeormMetadata;
};
