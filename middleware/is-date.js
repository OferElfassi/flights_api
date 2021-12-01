const HttpError = require("../util/http-error");
const moment = require("moment");

module.exports = (req, res, next) => {
  const formats = [
    moment.ISO_8601,
    "MM/DD/YYYY",
    "MM/DD/YY",
    "DD/MM/YYYY",
    "DD/MM/YY",
    "M/DD/YYYY",
    "M/DD/YY",
    "D/MM/YYYY",
    "D/MM/YY",
    "MM/D/YYYY",
    "MM/D/YY",
    "DD/M/YYYY",
    "DD/M/YY",
    "M/D/YYYY",
    "M/D/YY",
    "D/M/YYYY",
    "D/M/YY",
  ];
  if (req.body && req.body.date) {
    const date = req.body.date;
    if (moment(date, formats, true).isValid()) {
      req.body.date = moment(moment(date,formats)).format('MM-DD-YYYY');
      return next();
    } else {
      throw new HttpError(
        "Wrong date format, should be on of the following:",
        400
      );
    }
  }
  return  next(); // missing date handled in controller
};
