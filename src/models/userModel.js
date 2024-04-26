const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
    default: 'user',
    enum: ['user', 'admin'],
  },
});

const User = mongoose.model('User', schema);
exports.User = User;
