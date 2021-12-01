const express = require("express");
const flightsControllers = require("../controllers/flights-controllers");
const router = express.Router();
const isAuth = require("../middleware/is-auth");
const isDate = require("../middleware/is-date");
const isValidId = require("../middleware/is-valid-id");

router.get("/", isAuth, flightsControllers.getFlights);
router.get("/:flightId", isAuth, isValidId, flightsControllers.getFlight);
router.post("/", isAuth, isDate, flightsControllers.addFlight);
router.put("/:flightId", isAuth, isDate, isValidId, flightsControllers.updateFlight);
router.delete("/:flightId", isAuth, isValidId, flightsControllers.deleteFlight);

module.exports = router;
