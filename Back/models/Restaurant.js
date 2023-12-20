const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  postalCode: Number,
  city: String,
  street: String,
});

const RestaurantSchema = new mongoose.Schema({
  name: String,
  genre: {
    type: String,
    enum: ["Italien", "Indien", "Américain", "Méxicain", "Chinois", "Français"],
  },
  address: AddressSchema,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  biography: String,
  address: AddressSchema,
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
const User = mongoose.model("User", UserSchema);

module.exports = { Restaurant, User };
