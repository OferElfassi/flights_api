const HttpError = require("../util/http-error");
const User = require("../models/user-model");
module.exports = (req, res, next) => {
    throw new HttpError("Could not find this route.", 404);
};
