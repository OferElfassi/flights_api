const Flight = require("../models/flight-model");
const HttpError = require("../util/http-error");
const weatherApi = require("../util/weather-api");
const keys = require('../config/keys');

const getFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find({}).select('-__v');
    res.status(200)
      .json({ message: "Flights found successfully.", data: flights });
  } catch (e) {
    next(e);
  }
};

const getFlight = async (req, res, next) => {
  try {

    const flight = await Flight.findById(req.params.flightId);
    if (!flight) {
      throw new HttpError("Can't find this flight.", 404);
    }
    const weather = await weatherApi.getWeather(flight.destination, keys.WEATHER_API_KEY);
    const responseData = {
      dest: flight.destination,
      date: flight.date,
      weather: weather || "Can't get weather at destination",
    };
    res.status(200);
    res.json({ message: "Flights found successfully.", data: responseData });
  } catch (e) {
    next(e);
  }
};

const addFlight = async (req, res, next) => {
  try {
    if (!req.body.destination || !req.body.date) {
      throw new HttpError(`missing flight parameters`, 422);
    }
    const {destination,date} = req.body
    const isDup = await Flight.findOne({destination, date});
    if (isDup) {
      throw new HttpError(`Flight with the same destination and date already exist.`, 404);
    }
    const flight = new Flight({destination, date});
    await flight.save();
    res.status(201);
    res.json({
      message: "New flight added successfully.",
      data: (({ destination, date, _id }) => ({ destination, date, id:_id }))(flight),
    });
  } catch (e) {
    next(e);
  }
};

const updateFlight = async (req, res, next) => {
  try {
    if (!req.body.destination && !req.body.date) {
      throw new HttpError(`missing flight parameters`, 422);
    }
    const flight = await Flight.findById(req.params.flightId);
    flight.destination = req.body.destination || flight.destination;
    flight.date = req.body.date || flight.date;
    await flight.save();
    res.status(200);
    res.json({ message: "Flight updated successfully.",
      data:  (({ destination, date, _id }) => ({ destination, date, id:_id }))(flight) });
  } catch (e) {
    next(e);
  }
};

const deleteFlight = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.flightId);
    if (!flight) {
      throw new HttpError("Can't find this flight.", 404);
    }
    await flight.remove();
    res.status(200);
    res.json({ message: "Flight deleted successfully.", data: flight });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getFlights,
  getFlight,
  addFlight,
  updateFlight,
  deleteFlight,
};
