// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Booking = sequelize.define('booking', {
    bookingId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    bookingReference: {
      type: DataTypes.STRING,
    },
    erpReference: {
      type: DataTypes.INTEGER,
    },
    dayNumber: {
      type: DataTypes.INTEGER,
    },
    observation: {
      type: DataTypes.STRING,
    },
    startDateBooking: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDateBooking: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    flightNumber: {
      type: DataTypes.STRING,
    },
    totalAmount: {
      type: DataTypes.DOUBLE,
    },
    vehiclePrice: {
      type: DataTypes.DOUBLE,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    postalCode: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    birthdate: {
      type: DataTypes.DATEONLY,
    },
    driverLicenceNumber: {
      type: DataTypes.STRING,
    },
    driverLicenceDate: {
      type: DataTypes.DATEONLY,
    },
    driverLicencePlace: {
      type: DataTypes.STRING,
    },
    rateAnomaly: {
      type: DataTypes.INTEGER,
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
    installments: {
      type: DataTypes.INTEGER,
    },
    vehiclePriceInitial: {
      type: DataTypes.DOUBLE,
    },
    rateHelp: {
      type: DataTypes.INTEGER,
    },
    isFeaturedVehicle: {
      type: DataTypes.INTEGER,
    },
    isNewsletter: {
      type: DataTypes.INTEGER,
    },
    stockAnomaly: {
      type: DataTypes.INTEGER,
    },
    guardBrand: {
      type: DataTypes.STRING,
    },
    guardModel: {
      type: DataTypes.STRING,
    },
    guardRegistration: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'booking',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  Booking.associate = (models) => {
    Booking.belongsTo(models.civility, {
      foreignKey: {
        name: 'civilityIdKey',
        field: 'civility_id',
      },
      targetKey: 'civilityId',
      as: 'civility',
    });
    Booking.belongsTo(models.currency, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      targetKey: 'currencyId',
      as: 'currency',
    });
    Booking.belongsTo(models.locale, {
      foreignKey: {
        name: 'localeCodeKey',
        field: 'locale_code',
      },
      targetKey: 'localeCode',
      as: 'localeCode',
    });
    Booking.belongsTo(models.agency, {
      foreignKey: {
        name: 'pickupAgencyIdKey',
        field: 'pickup_agency_id',
      },
      targetKey: 'agencyId',
      as: 'pickupAgency',
    });
    Booking.belongsTo(models.proPartner, {
      foreignKey: {
        name: 'proPartnerIdKey',
        field: 'pro_partner_id',
      },
      targetKey: 'proPartnerId',
      as: 'proPartner',
    });
    Booking.belongsTo(models.bookingState, {
      foreignKey: {
        name: 'bookingStateIdKey',
        field: 'booking_state_id',
      },
      targetKey: 'bookingStateId',
      as: 'bookingState',
    });
    Booking.belongsTo(models.vehicle, {
      foreignKey: {
        name: 'vehicleIdKey',
        field: 'vehicle_id',
      },
      targetKey: 'vehicleId',
      as: 'vehicle',
    });
    Booking.belongsTo(models.country, {
      foreignKey: {
        name: 'countryIdKey',
        field: 'country_id',
      },
      targetKey: 'countryId',
      as: 'country',
    });
    Booking.belongsTo(models.customer, {
      foreignKey: {
        name: 'customerIdKey',
        field: 'customer_id',
      },
      targetKey: 'customerId',
      as: 'customer',
    });
    Booking.belongsTo(models.agency, {
      foreignKey: {
        name: 'dropOffAgencyIdKey',
        field: 'drop_off_agency_id',
      },
      targetKey: 'agencyId',
      as: 'dropOffAgency',
    });
    Booking.belongsTo(models.payment, {
      foreignKey: {
        name: 'paymentIdKey',
        field: 'payment_id',
      },
      targetKey: 'paymentId',
      as: 'payment',
    });
    Booking.belongsTo(models.application, {
      foreignKey: {
        name: 'applicationIdKey',
        field: 'application_id',
      },
      targetKey: 'applicationId',
      as: 'application',
    });
    Booking.belongsTo(models.promoCode, {
      foreignKey: {
        name: 'promoCodeIdKey',
        field: 'promo_code_id',
      },
      targetKey: 'promoCodeId',
      as: 'promoCode',
    });
    Booking.belongsTo(models.airlineCompany, {
      foreignKey: {
        name: 'airlineCompanyIdKey',
        field: 'airline_company_id',
      },
      targetKey: 'airlineCompanyId',
      as: 'airlineCompany',
    });
    Booking.belongsTo(models.helpRateReason, {
      foreignKey: {
        name: 'helpRateReasonIdKey',
        field: 'help_rate_reason_id',
      },
      targetKey: 'helpRateReasonId',
      as: 'helpRateReason',
    });
    Booking.belongsTo(models.vehicle, {
      foreignKey: {
        name: 'vehicleIdInitialKey',
        field: 'vehicle_id_initial',
      },
      targetKey: 'vehicleId',
      as: 'vehicleIdInitial',
    });
    Booking.hasMany(models.additionalDriver, {
      foreignKey: {
        name: 'bookingIdKey',
        field: 'booking_id',
      },
      sourceKey: 'bookingId',
      as: 'additionalDrivers',
    });
    Booking.hasMany(models.attachment, {
      foreignKey: {
        name: 'bookingIdKey',
        field: 'booking_id',
      },
      sourceKey: 'bookingId',
      as: 'attachments',
    });
    Booking.hasMany(models.bookingAction, {
      foreignKey: {
        name: 'bookingIdKey',
        field: 'booking_id',
      },
      sourceKey: 'bookingId',
      as: 'bookingActions',
    });
    Booking.hasMany(models.bookingExtra, {
      foreignKey: {
        name: 'bookingIdKey',
        field: 'booking_id',
      },
      sourceKey: 'bookingId',
      as: 'bookingExtras',
    });
    Booking.hasMany(models.bookingStateErp, {
      foreignKey: {
        name: 'bookingIdKey',
        field: 'booking_id',
      },
      sourceKey: 'bookingId',
      as: 'bookingStateErps',
    });
    Booking.hasMany(models.transaction, {
      foreignKey: {
        name: 'bookingIdKey',
        field: 'booking_id',
      },
      sourceKey: 'bookingId',
      as: 'transactions',
    });
  };

  return Booking;
};
