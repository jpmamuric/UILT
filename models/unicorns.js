const mongoose = require('mongoose');
const { Schema } = mongoose;

const unicornSchema = new Schema({
  name: String
});

mongoose.model('unicorns', unicornSchema );
