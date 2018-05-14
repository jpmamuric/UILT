const mongoose = require('mongoose');
const { Schema } = mongoose;

const unicornSchema = new Schema({
  name:  { type: String, required: true },
  date: { type: Date, default: Date.now }
});

mongoose.model('unicorns', unicornSchema );
