import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PublicServicesIndexRoute extends Route {
  @service store;

  async model(params) {
    const query = {};

    return this.store.query('public-service', query);
  }
}
