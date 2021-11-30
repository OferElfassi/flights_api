const HttpError = require("../util/http-error");
const User = require("../models/user-model");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) throw new HttpError("Not authenticated.", 401);
  User.findOne({ "apiKey.key": authHeader })
    .then((user) => {
      if (!user.apiKey.keyInfo.isValid)
        throw new HttpError("Not authenticated.", 401);
      next();
    })
    .catch((err) => {
      next(err);
    });
};
