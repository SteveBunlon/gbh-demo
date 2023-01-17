// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const AgencySpecialSchedule = sequelize.define('agencySpecialSchedule', {
    agencySpecialScheduleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    specialDate: {
      type: DataTypes.DATEONLY,
    },
    openingTime: {
      type: DataTypes.TIME,
    },
    closingTime: {
      type: DataTypes.TIME,
    },
    isClosed: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    breakStart: {
      type: DataTypes.TIME,
    },
    breakEnd: {
      type: DataTypes.TIME,
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
    tableName: 'agency_special_schedule',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  AgencySpecialSchedule.associate = (models) => {
    AgencySpecialSchedule.belongsTo(models.agency, {
      foreignKey: {
        name: 'agencyIdKey',
        field: 'agency_id',
      },
      targetKey: 'agencyId',
      as: 'agency',
    });
  };

  return AgencySpecialSchedule;
};