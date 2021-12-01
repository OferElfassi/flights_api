const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  destination: {
    type: String,
    required: [true, "Destination is required."],
    default: "",
  },
  date: {
    type: Date,
    required: [true, "Flight date is required."],
    default: "",
  },
});

const Flight = mongoose.model("flight", FlightSchema);

module.exports = Flight;
