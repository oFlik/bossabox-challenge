const express = require('express');

const { getTools, createTool } = require('../controllers/toolControllers');

const router = express();

router.get('/tools', getTools);
router.post('/tools', createTool);

module.exports = router;
