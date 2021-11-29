const express = require("express");
const flightsControllers = require("../controllers/flights-controllers");
const router = express.Router();
const isAuth = require("../middleware/is_auth");

router.get("/", isAuth, flightsControllers.getFlights);
router.get("/:flightId", isAuth, flightsControllers.getFlight);
router.post("/", isAuth, flightsControllers.addFlight);
router.put("/:flightId", isAuth, flightsControllers.updateFlight);
router.delete("/:flightId", isAuth, flightsControllers.deleteFlight);

module.exports = router;
