// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const AttachmentType = sequelize.define('attachmentType', {
    attachmentTypeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    attachmentTypeLabel: {
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
    tableName: 'attachment_type',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  AttachmentType.associate = (models) => {
    AttachmentType.hasMany(models.attachment, {
      foreignKey: {
        name: 'attachmentTypeIdKey',
        field: 'attachment_type_id',
      },
      sourceKey: 'attachmentTypeId',
      as: 'attachmentTypeAttachments',
    });
  };

  return AttachmentType;
};
