//https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=metric&appid=2216d706dc30557bf642099e84018009
const axios = require("axios");
const Flight = require("../models/flight-model");
const HttpError = require("../util/http-error");
const weatherApi = require("../util/weatherApi");
const getFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find({});
    res
      .status(200)
      .json({ message: "Flights found successfully.", data: flights });
  } catch (e) {
    next(e);
  }
};

const getFlight = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.flightId);
    if (!flight) throw new HttpError("Can't find this flight.", 404);
    const apiKey = "2216d706dc30557bf642099e84018009";
    const weather = await weatherApi.getWeather(flight.destination, apiKey);
    const responseData = {
      dest: flight.destination,
      time: flight.date,
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
    if (!req.body.destination || !req.body.date)
      throw new HttpError(`missing flight parameters`, 422);
    const flight = new Flight({
      destination: req.body.destination,
      date: req.body.date,
    });
    await flight.save();
    res.status(200);
    res.json({ message: "New flight added successfully.", data: flight });
  } catch (e) {
    next(e);
  }
};

const updateFlight = async (req, res, next) => {
  try {
    if (!req.body.destination && !req.body.date)
      throw new HttpError(`missing flight parameters`, 422);
    const flight = await Flight.findById(req.params.flightId);
    flight.destination = req.body.destination || flight.destination;
    flight.date = req.body.date || flight.date;
    await flight.save();
    res.status(200);
    res.json({ message: "Flight updated successfully.", data: flight });
  } catch (e) {
    next(e);
  }
};

const deleteFlight = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.flightId);
    if (!flight) throw new HttpError("Can't find this flight.", 404);
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
