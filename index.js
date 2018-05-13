const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
const PORT = process.env.PORT || '5000';
const app = express();

//INIT MODELS
require('./models/unicorns');

//INIT ROUTES
const index = require('./routes/index');
const unicorns = require('./routes/route-unicorns');

//INIT MONGOOSE
mongoose.connect(keys.mongoURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', () => console.log('mongoose is connected'));

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', index);
app.use('/api/unicorns', unicorns);

//INIT APP
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

module.exports = app;
