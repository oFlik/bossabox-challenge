const index = require('../routes/indexRoutes');
const app = require('./basic');

module.exports = (app) => {
  app.use('/', index);
};
