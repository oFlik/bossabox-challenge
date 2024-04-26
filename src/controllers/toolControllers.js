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
  const { tag } = req.query;

  if (tag) {
    const tools = await Tool.find({ tags: tag });
    return res.status(200).send(tools);
  }

  const tools = await Tool.find({});
  return res.status(200).send(tools);
};

exports.deleteTool = async (req, res) => {
  const { id } = req.params;

  const tool = await Tool.findByIdAndDelete({ _id: id });

  return res.status(200).send({});
};
