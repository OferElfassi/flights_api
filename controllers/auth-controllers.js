const User = require("../models/user-model");
const keyGenerator = require("../util/key-generator");
const HttpError = require("../util/http-error");

const getAuthKey = async (req, res, next) => {
  try {
    if (!req.body.id) {
      throw new HttpError("Missing id", 422);
    }
    const apiKey = keyGenerator(8, "A#");
    const remainingMilliseconds = 10 * 60 * 1000;
    let user = await User.findOne({ pid: req.body.id });
    if (!user) {
      user = new User({ pid: req.body.id });
      await user.save();
    }
    user.apiKey = {
      key: apiKey,
      expiryDate: new Date(new Date().getTime() + remainingMilliseconds),
    };
    await user.save();

    res.status(200).json({
      message: "new key created successfully",
      data: { userId: req.params.userId, apiKey },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { getAuthKey };
