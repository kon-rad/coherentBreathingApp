const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  username: String,
  avatar: String,
  lastLogin: { type: Date, default: Date.now }
});

mongoose.model('users', userSchema);
