const { User } = require('../models/userModel.js');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.find({ email });

    if (userExists) {
      return res.status(403).send({ message: 'Email já existe! Teste efetuar o login.' });
    }

    

    return res.status(201).send(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ message: 'Erro do servidor' });
  }
};

exports.findAll = async (req, res) => {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ message: 'Erro do servidor' });
  }
};
