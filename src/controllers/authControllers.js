const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../models/userModel');

const hash = process.env.JWT_HASH;

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send({ message: 'Usuário não encontrado, tente fazer o registro!' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        mensagem: 'Senha incorreta. Tente novamente ou clique em "Esqueceu a senha?" para escolher outra.',
      });
    }

    const token = jwt.sign({ id: user.id }, hash, { expiresIn: '8h' });

    const { password: _, ...userData } = user.toObject();

    return res.status(200).send({ message: 'Login realizado com sucesso!', userData, token });
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ message: 'Erro do servidor' });
  }
};
