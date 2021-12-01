const HttpError = require("../util/http-error");
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = (req, res, next) => {
    if(ObjectId.isValid(req.params.id)){
        if((String)(new ObjectId(req.params.id)) === req.params.id)
            return next();
        throw new HttpError("Invalid id", 422);
    }
    throw new HttpError("Invalid id", 422);
};
