const passport = require('../services/passport');

module.exports = app => {

  app.get('/auth/google', (req, res) => {
    res.send('Coming Soon');
  });
};