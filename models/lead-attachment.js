// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const LeadAttachment = sequelize.define('leadAttachment', {
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
    leadAttachmentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    leadAttachmentPath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    leadAttachmentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'lead_attachment',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  LeadAttachment.associate = (models) => {
    LeadAttachment.belongsTo(models.leadForm, {
      foreignKey: {
        name: 'leadFormIdKey',
        field: 'lead_form_id',
      },
      targetKey: 'leadFormId',
      as: 'leadForm',
    });
  };

  return LeadAttachment;
};
