const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');

const config = require('./config/keys');
const PORT = process.env.PORT || '5000';
const app = express();

//INIT MODELS
require('./models/users');
require('./models/unicorns');

//INIT SERVICES
require('./services/passport');

//INIT ROUTES
const authRoute   = require('./routes/route-auth');
const mainRoute = require('./routes/route-main');
const unicornsRoute = require('./routes/route-unicorns');

//INIT MONGOOSE
mongoose.connect(config.mongoURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', () => console.log('mongoose is connected'));

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [config.cookieKey] }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoute);
app.use('/api', mainRoute);
app.use('/api/unicorns', unicornsRoute);

//INIT APP
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

module.exports = app;
