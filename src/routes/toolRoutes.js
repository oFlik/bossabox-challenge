const express = require('express');

const { getTools, createTool, deleteTool } = require('../controllers/toolControllers');

const router = express();

router.get('/tools', getTools);
router.post('/tools', createTool);
router.delete('/tools/:id', deleteTool);

module.exports = router;
