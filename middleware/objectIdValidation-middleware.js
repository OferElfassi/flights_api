const HttpError = require("../util/http-error");
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = (req, res, next) => {
    if("^[0-9a-fA-F]{24}$".test(req.params.id)){
        return next();
    }
    throw new HttpError("Invalid id", 422);
};
