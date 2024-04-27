const bcrypt = require('bcrypt');

const { User } = require('../models/userModel.js');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(403).send({ message: 'Email já existe! Teste efetuar o login.' });
    }

    const hashPasssword = await bcrypt.hash(String(password), 10);

    const userData = {
      name,
      email,
      password: hashPasssword,
      role: role || 'user',
    };

    const user = await User.create(userData);

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
