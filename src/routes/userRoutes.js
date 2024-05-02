const express = require('express');
const { findAll, register } = require('../controllers/userControllers');

const router = express();

router.post('/register', register);
router.get('/users', findAll);

module.exports = router;
