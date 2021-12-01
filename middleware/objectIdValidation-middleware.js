const HttpError = require("../util/http-error");
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = (req, res, next) => {
    const checkForValidMongoDbID = new RegExp("^[0-9a-fA-F]{24}$")
    if(checkForValidMongoDbID.test(req.params.id)){
        return next();
    }
    throw new HttpError("Invalid id", 422);
};
