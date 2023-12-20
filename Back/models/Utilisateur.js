import { AddressSchema } from "./Adresse";

const mongoose = require("mongoose");

const UtilisateurSchema = new mongoose.Schema({
  username: String,
  password: String,
  biography: String,
  address: AddressSchema,
});

const Utilisateur = mongoose.model("User", UtilisateurSchema);

module.exports = { Utilisateur };
