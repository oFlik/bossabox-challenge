const { Tool } = require('../models/toolModel');

exports.createTool = async (req, res) => {
  const { title, link, description, tags } = req.body;

  const tool = new Tool({
    title,
    link,
    description,
    tags,
  });

  const savedTool = await tool.save();
  res.status(201).send(savedTool);
};

exports.getTools = async (req, res) => {
  const tools = await Tool.find({});

  return res.send(tools);
};
