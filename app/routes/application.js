import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { warn } from '@ember/debug';
import 'moment';
import 'moment-timezone';

export default class ApplicationRoute extends Route {
  @service currentSession;
  @service moment;
  @service session;
  @service router;

  async beforeModel() {
    await this.session.setup();

    const moment = this.moment;
    moment.setLocale('nl-be');
    moment.setTimeZone('Europe/Brussels');
    moment.set('defaultFormat', 'DD MMM YYYY, HH:mm');

    await this._loadCurrentSession();
  }

  async _loadCurrentSession() {
    try {
      await this.currentSession.load();
    } catch (error) {
      warn(error, { id: 'current-session-load-failure' });
      this.router.transitionTo('auth.logout');
    }
  }
}
