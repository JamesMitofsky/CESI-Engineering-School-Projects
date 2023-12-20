const mongoose = require("mongoose");
const AddressSchema = new mongoose.Schema({
  postalCode: Number,
  city: String,
  street: String,
});

module.exports = { AddressSchema };
