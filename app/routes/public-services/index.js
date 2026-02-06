import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PublicServicesIndexRoute extends Route {
  @service store;
  @service session;

  queryParams = {
    page: {
      refreshModel: true,
    },
    size: {
      refreshModel: true,
    },
    sort: {
      refreshModel: true,
    },
    searchTerm: {
      refreshModel: true,
    },
  };

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model(params) {
    const query = {
      include:
        'thematic-areas,target-audiences,type,relevant-administrative-units',
      filter: {
        'is-archived': false,
        'target-audiences': {
          ':id:': '01f7b215-3eb6-4997-8bb7-4c2b2ffcb138',
        },
        'executing-authority-levels': {
          ':id:': '75e3398e-7a87-48eb-af5f-f0bc81a6a5a4',
        },
      },
      page: { size: params.size, number: params.page },
      sort: params.sort,
    };

    if (params.searchTerm) {
      query.filter.name = params.searchTerm;
    }

    return this.store.query('public-service', query);
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.model = model;
  }
}
