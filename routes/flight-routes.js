const express = require("express");
const flightsControllers = require("../controllers/flights-controllers");
const router = express.Router();

router.get("/", flightsControllers.getFlights);
router.get("/:flightId", flightsControllers.getFlight);
router.post("/", flightsControllers.addFlight);
router.put("/flightId", flightsControllers.deleteFlight);
router.delete("/flightId", flightsControllers.deleteFlight);

module.exports = router;
