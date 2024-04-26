const app = require('./basic');

const index = require('../routes/indexRoutes');
const userRoutes = require('../routes/userRoutes');
const toolRoutes = require('../routes/toolRoutes')

module.exports = (app) => {
  app.use(index);
  app.use(userRoutes);
  app.use(toolRoutes);
};
