const jwt = require('jsonwebtoken');
const routeBypass = require('../helpers/routeBypass');

const { User } = require('../models/userModel');

const hash = process.env.JWT_HASH;

const userAuthentication = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization || authorization == 'Bearer') {
      return res.status(401).json({
        mensagem: 'Você precisa estar logado para acessar este recurso!',
      });
    }

    const token = authorization.split(' ')[1];
    const { id } = jwt.verify(token, hash);

    const validUser = await User.findOne({ id });

    if (!validUser) {
      return res.status(401).json({
        mensagem: 'Não foi possível encontrar uma conta para este usuário.',
      });
    }

    const { password, ...user } = validUser.toObject();

    req.user = user;

    next();
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ message: 'Erro do servidor' });
  }
};

module.exports = (...excludeRoutes) => routeBypass(userAuthentication, ...excludeRoutes);
