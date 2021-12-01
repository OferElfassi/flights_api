const HttpError = require("../util/http-error");
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = (req, res, next) => {
    if(ObjectId.isValid(req.params.flightId)){
        if((String)(new ObjectId(req.params.flightId)) === req.params.flightId)
            return next();
        throw new HttpError("Invalid id", 422);
    }
    throw new HttpError("Invalid id", 422);
};
