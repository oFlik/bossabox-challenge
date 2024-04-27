const express = require('express');
const { findAll, register } = require('../controllers/userControllers');

const router = express();

router.post('/users', register);
router.get('/users', findAll);

module.exports = router;
