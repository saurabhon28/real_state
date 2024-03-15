const User = require("../models/userModel");

module.exports.register = async (req, res, next) => {
  try {
    const { email } = req.body;
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "E-mail already exists", status: false });

    const user = await User.create({
      email,
    });

    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};
