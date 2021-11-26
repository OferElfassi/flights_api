const mongoose = require("mongoose");
const keySchema = require("./key-schema");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  pid: {
    unique: true,
    type: String,
    required: [true, "personal id is required."],
  },
  apiKey: keySchema,
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
