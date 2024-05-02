const userAuthentication = require('../middlewares/userAuthentication');

module.exports = (app) => {
  const excludeRoutes = ['/login', '/register', '/'];

  app.use(userAuthentication(...excludeRoutes));
};
