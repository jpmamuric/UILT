const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose       = require('mongoose');
const config         = require('../config/keys');

const Users = mongoose.model('users')

passport.serializeUser((user, done) => {
  //using user.id (mlab db id) for multiple oauth services purpose
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //accessing mongo db is async, use promise callbacks
  Users.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL: config.callbackURL,
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await Users.findOne({ googleID: profile.id });

    if(existingUser) {
      return done(null, existingUser);
    } else {

      try {
        const user = await new Users({
          googleID    : profile.id,
          googleEmail : profile.emails[0].value,
          googleName  : profile.displayName
        }).save();

        done(null, user);
      }

      catch(err) {
        done(null);
      }
    }
  })
);
