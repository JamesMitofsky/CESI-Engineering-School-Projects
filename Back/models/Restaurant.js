import { AddressSchema } from "./Adresse";

const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  genre: {
    type: String,
    enum: ["Italien", "Indien", "Américain", "Méxicain", "Chinois", "Français"],
  },
  address: AddressSchema,
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = { Restaurant };
