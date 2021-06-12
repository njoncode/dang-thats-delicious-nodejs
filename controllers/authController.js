const passport = require('passport');

exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    faliureFlash: 'Failed Login',
    successRedirect: '/',
    successFlash: 'You are now logged in!'
}); 