const AddressSchema = new mongoose.Schema({
  postalCode: Number,
  city: String,
  street: String,
});

export { AddressSchema };
