const keyGenerator = require("../util/key-generator");

const getAuthKey = async (req, res, next) => {
  try {
    const apiKey = keyGenerator(6, "A#");
    res
      .status(200)
      .json({
        message: "new key created successfully",
        data: { userId: req.params.userId, apiKey },
      });
  } catch (e) {}
};

exports = { getAuthKey };
