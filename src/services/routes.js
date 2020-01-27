const routes = require('next-routes');

module.exports =
  routes()
  .add('home', '/', '')
  .add('auth', '/:page(login|register)', 'auth')
  .add('profile');
