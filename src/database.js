const mongoose = require("mongoose");
const dataGenerator = require("../util/data-generator");
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = require("../config/keys");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: DB_USER,
  pass: DB_PASS,
  dbName: DB_NAME,
};

mongoose.connect(DB_HOST, options);
console.log(DB_HOST)
mongoose.connection.on("connected", () => {
  console.log("Database connected");
  dataGenerator.fakeFlights(20)
    .catch((e) => console.log("Fake data creation failed", e));
});

mongoose.connection.on("error", (err) => {
  console.log("Database connection error", err);
});
