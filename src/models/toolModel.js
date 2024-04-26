const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: String,
    link: String,
    description: String,
    tags: Array,
  },
  {
    versionKey: false,
  }
);

schema.index({ title: 1, link: 1 }, { unique: true });
const Tool = mongoose.model('Tools', schema);
exports.Tool = Tool;
