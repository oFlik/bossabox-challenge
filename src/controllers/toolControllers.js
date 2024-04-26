const { Tool } = require('../models/toolModel');

exports.createTool = async (req, res) => {
  const { title, link, description, tags } = req.body;

  try {
    const tool = new Tool({
      title,
      link,
      description,
      tags,
    });

    const savedTool = await tool.save();
    res.status(201).send(savedTool);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: 'Erro do servidor' });
  }
};

exports.getTools = async (req, res) => {
  const { tag } = req.query;

  try {
    if (tag) {
      const tools = await Tool.find({ tags: tag });
      return res.status(200).send(tools);
    }

    const tools = await Tool.find({});
    return res.status(200).send(tools);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: 'Erro do servidor' });
  }
};

exports.deleteTool = async (req, res) => {
  const { id } = req.params;

  try {
    await Tool.findByIdAndDelete({ _id: id });
    return res.status(200).send({});
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: 'Erro do servidor' });
  }
};
