const express = require("express");
const authRoutes = require("./routes/auth-routes");
const flightRoutes = require("./routes/flight-routes");
const mongoose = require("mongoose");
const HttpError = require('./util/http-error')

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/flights", flightRoutes);

app.use((req, res, next) => {
    throw new HttpError('Could not find this route.', 404);
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
});

mongoose.connect('mongodb://localhost/flights').then(()=>{
    app.listen(port, () => console.log(`server listening on port ${port}`));
})
