const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const KeySchema = new Schema({
  key: { type: String, default: "" },
  expiryDate: { type: Number, default: 0 },
});

KeySchema.virtual("keyInfo").get(function () {
  const apiKey = this.key;
  const isValid =
    this.expiryDate !== 0 && new Date(this.expiryDate) >= new Date();
  const remainingMinutes = 6;
  return { isValid, remainingMinutes, apiKey};
});

module.exports = KeySchema;
