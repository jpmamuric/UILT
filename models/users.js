const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: { type: String, required: true },
  googleEmail: { type: String, required: true },
  googleName: { type: String, required: true },
  credits : { type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});

mongoose.model('users', userSchema);
