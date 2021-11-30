const express = require("express");
const authRoutes = require("./routes/auth-routes");
const flightRoutes = require("./routes/flight-routes");
const mongoose = require("mongoose");
const fakeDataGenerator = require("./util/fakeDataGenerator");
const keys = require('./config/keys');
const errorMiddleware = require('./middleware/error-middleware')
const unKnownRouteMiddleware = require('./middleware/unknownRoute-middleware')

const DB_CONNECTION_STRING = process.env.NODE_ENV !== 'production' ?
    `mongodb+srv://${keys.DB_USER}:${keys.DB_PASS}@${keys.DB_HOST}/${keys.DB_NAME}?retryWrites=true&w=majority`:
    `mongodb://${keys.DB_HOST}/${keys.DB_NAME}`

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/flights", flightRoutes);

app.use(unKnownRouteMiddleware);
app.use(errorMiddleware);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  mongoose.connect(DB_CONNECTION_STRING).then(() => {
    console.log("Connected to database");
    return fakeDataGenerator.fakeFlights(20)
  }).catch(e=>{
    console.log("Something went wrong",e)
  });
});
