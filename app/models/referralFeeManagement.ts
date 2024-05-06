"use strict";

var mongoose = require("mongoose");
var collectionName = "referralFeeManagement";

var schema = mongoose.Schema(
  {
    tier: { type: String, default: "" },
    fee: { type: Number, default: 0 },
    feeType: { type: String, enum: { values: ["PERCENTAGE", "RESERVER"] } },
    userAddresses: { type: [String], default: [] },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  },
  { collection: collectionName }
);

var referralFeeManagementModel = mongoose.model(collectionName, schema);
module.exports = referralFeeManagementModel;