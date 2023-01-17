// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Branch = sequelize.define('branch', {
    branchId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    branchLabel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    graceDelay: {
      type: DataTypes.INTEGER,
    },
    wsUser: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wsPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    zipcode: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    department: {
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
    upsellingVehiclePercentage: {
      type: DataTypes.INTEGER,
    },
    showUnavailableVehicles: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
  }, {
    tableName: 'branch',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  Branch.associate = (models) => {
    Branch.belongsTo(models.company, {
      foreignKey: {
        name: 'companyIdKey',
        field: 'company_id',
      },
      targetKey: 'companyId',
      as: 'company',
    });
    Branch.belongsTo(models.brand, {
      foreignKey: {
        name: 'brandIdKey',
        field: 'brand_id',
      },
      targetKey: 'brandId',
      as: 'brand',
    });
    Branch.hasMany(models.agency, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'agencies',
    });
    Branch.hasMany(models.application, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'applications',
    });
    Branch.hasMany(models.attribute, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'attributes',
    });
    Branch.hasMany(models.branchTranslation, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'branchTranslations',
    });
    Branch.hasMany(models.customer, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'customers',
    });
    Branch.hasMany(models.driverAge, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'driverAges',
    });
    Branch.hasMany(models.extra, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'extras',
    });
    Branch.hasMany(models.groupExtra, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'groupExtras',
    });
    Branch.hasMany(models.groupExtraHeader, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'groupExtraHeaders',
    });
    Branch.hasMany(models.includedService, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'includedServices',
    });
    Branch.hasMany(models.leadForm, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'leadForms',
    });
    Branch.hasMany(models.proPartner, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'proPartners',
    });
    Branch.hasMany(models.promoCode, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'promoCodes',
    });
    Branch.hasMany(models.vehicle, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'vehicles',
    });
    Branch.hasMany(models.vehicleType, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'vehicleTypes',
    });
    Branch.hasMany(models.workflowTask, {
      foreignKey: {
        name: 'branchIdKey',
        field: 'branch_id',
      },
      sourceKey: 'branchId',
      as: 'workflowTasks',
    });
  };

  return Branch;
};
