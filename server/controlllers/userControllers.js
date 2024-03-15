const User = require("../models/userModel");
const userModel = require("../models/userModel");

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

module.exports.getUsers = async (req, res) => {
  const data = await userModel.find({});
  if (data) {
    return res.send({ code: 200, message: "Success", data: data });
  } else {
    return res.send({ code: 500, message: "Service Error" });
  }
};
