const express = require('express');
const { findAll } = require('../controllers/userControllers');

const router = express();

router.get('/users', findAll);

module.exports = router;
