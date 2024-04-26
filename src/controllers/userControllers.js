const { User } = require('../models/userModel.js');

exports.findAll = async (req, res) => {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (e) {
    return res.status(500).send({ message: 'Erro do servidor' });
  }
};
