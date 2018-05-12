const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');
const PORT = process.env.PORT || '5000';
const app = express();

const index = require('./routes/index');

mongoose.connect(keys.mongoURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', () => console.log('mongoose is connected'));


app.use('/api', index);

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

module.exports = app;
