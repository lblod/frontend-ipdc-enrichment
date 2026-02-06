import EmberRouter from '@ember/routing/router';
import config from 'frontend-ipdc-enrichment/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');

  this.route('auth', { path: '/authorization' }, function () {
    this.route('login');
    this.route('switch');
    this.route('logout');
    this.route('callback');
  });

  this.route('loading');

  this.route('legaal', function () {
    this.route('disclaimer');
    this.route('cookieverklaring');
    this.route('toegankelijkheidsverklaring');
  });
  this.route('mock-login');
  this.route('public-services', function () {
    this.route('edit', { path: '/:id/edit' });
  });
});
