'use strict';

const app = require('./config/basic');

require('./config/database');
require('./config/middlewares')(app);
require('./config/routes')(app);

module.exports = app;
