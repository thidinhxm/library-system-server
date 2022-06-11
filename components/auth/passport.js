const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Librarian = require('../librarian/librarianModel');

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(),
opts.secretOrKey = process.env.JWT_SECRET,

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const { id } = jwt_payload;
    const librarian = await Librarian.findById(id);
    if (!librarian) {
      return done(null, false);
    }
    return done(null, librarian);
  } catch (error) {
    return done(error, false);
  } 
}
));

module.exports = passport;