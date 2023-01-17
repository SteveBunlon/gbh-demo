// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const DriverAge = sequelize.define('driverAge', {
    driverAgeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    ageCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ageLabel: {
      type: DataTypes.STRING,
    },
    ageMin: {
      type: DataTypes.INTEGER,
    },
    ageMax: {
      type: DataTypes.INTEGER,
    },
    isDefault: {
      type: DataTypes.INTEGER,
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
    tableName: 'driver_age',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  DriverAge.associate = (models) => {
    DriverAge.belongsTo(models.branch, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      targetKey: 'branchId',
      as: 'branch',
    });
    DriverAge.hasMany(models.driverAgeTranslation, {
      foreignKey: {
        name: 'driverAgeIdKey',
        field: 'driver_age_id',
      },
      sourceKey: 'driverAgeId',
      as: 'driverAgeDriverAgeTranslations',
    });
  };

  return DriverAge;
};
