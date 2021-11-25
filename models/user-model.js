const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  pid: {
    type: String,
    required: [true, "personal id is required."],
  },
  apiKey: { type: String, default: "" },
  expiryDate: { type: Number, default: 0 },
});

UserSchema.virtual("keyInfo").get(function () {
  const key = this.apiKey;
  const isValid = ((this.expiryDate!==0) && (new Date(this.expiryDate) <= new Date()));
  const remainingMinutes = 6;
  return { isValid, remainingMinutes,key };
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
