const express = require("express");
const flightsControllers = require("../controllers/flights-controllers");
const router = express.Router();
const isAuth = require("../middleware/isAuth-middleware");
const isDate = require("../middleware/dateValidation-middleware");

router.get("/", isAuth, flightsControllers.getFlights);
router.get("/:flightId", isAuth, flightsControllers.getFlight);
router.post("/", isAuth, isDate, flightsControllers.addFlight);
router.put("/:flightId", isAuth, isDate, flightsControllers.updateFlight);
router.delete("/:flightId", isAuth, flightsControllers.deleteFlight);

module.exports = router;
