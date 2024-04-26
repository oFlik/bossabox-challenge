const { User } = require('../models/userModel.js');

exports.findAll = async (req, res) => {
  const users = await User.find({});
  
  return res.send(users);
};
