const express = require("express");
const authRoutes = require("../routes/auth-routes");
const flightRoutes = require("../routes/flight-routes");
const isError = require("../middleware/is-error");
const isUnKnownRoute = require("../middleware/is-unknown-route");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/flights", flightRoutes);

app.use(isUnKnownRoute);
app.use(isError);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
