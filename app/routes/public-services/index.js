import Route from '@ember/routing/route';
import { service } from '@ember/service';
import search, { langStringResourceFormat } from '../../utils/mu-search';
import { isPresent } from '@ember/utils';

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
    doelgroep: {
      refreshModel: true,
    },
    searchTerm: {
      refreshModel: true,
    },
    gepubliceerd: {
      refreshModel: true,
    },
    themes: {
      refreshModel: true,
    },
    types: {
      refreshModel: true,
    },
    authorities: {
      refreshModel: true,
    },
    administrativeUnits: {
      refreshModel: true,
    },
  };

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model(params) {
    const filter = {
      'is-archived': false,
      'executingAuthorityLevels.uuid': '75e3398e-7a87-48eb-af5f-f0bc81a6a5a4',
      'targetAudiences.uuid': '01f7b215-3eb6-4997-8bb7-4c2b2ffcb138',
    };

    this.searchTerm = params.searchTerm;
    filter[':sqs:name.nl^5'] = isPresent(params.searchTerm)
      ? params.searchTerm
      : '*';

    if (params.doelgroep !== undefined && params.doelgroep !== '') {
      if (params.doelgroep === 'true') {
        filter[':has:relevant-administrative-units'] = 't';
      } else if (params.doelgroep === 'false') {
        filter[':has-no:relevant-administrative-units'] = 't';
      }
    }

    if (params.gepubliceerd !== undefined && params.gepubliceerd !== '') {
      if (params.gepubliceerd === 'true') {
        filter[':has:date-published'] = 't';
      } else if (params.gepubliceerd === 'false') {
        filter[':has-no:date-published'] = 't';
      }
    }

    this.themeRecords = [];
    if (params.themes.length) {
      this.themeRecords = await Promise.all(
        params.themes.map((id) => this.store.findRecord('concept', id)),
      );
      filter['thematicAreas.broader.uuid'] = this.themeRecords
        .map((c) => c.id)
        .join(',');
    }

    this.authorityRecords = [];
    if (params.authorities.length) {
      this.authorityRecords = await Promise.all(
        params.authorities.map((id) => this.store.findRecord('concept', id)),
      );
      filter['competentAuthority.uuid'] = this.authorityRecords
        .map((c) => c.id)
        .join(',');
    }

    this.typeRecords = [];
    if (params.types.length) {
      this.typeRecords = await Promise.all(
        params.types.map((id) => this.store.findRecord('concept', id)),
      );
      filter['type.broader.uuid'] = this.typeRecords.map((c) => c.id).join(',');
    }

    this.administrativeUnitRecords = [];
    if (params.administrativeUnits.length) {
      this.administrativeUnitRecords = await Promise.all(
        params.administrativeUnits.map((id) =>
          this.store.findRecord('concept', id),
        ),
      );
      filter[':terms:relevantAdministrativeUnits.uuid.keyword'] =
        this.administrativeUnitRecords.map((c) => c.id).join(',');
    }

    return search(
      'public-services',
      params.page,
      params.size,
      params.sort,
      filter,
      ({ id, attributes }) => {
        const product = attributes;
        product.id = id;
        ['name', 'description'].forEach((attr) => {
          product[attr] = langStringResourceFormat(product[attr]);
        });
        ['dateCreated', 'dateModified', 'startDate', 'endDate'].forEach(
          (attr) => {
            const dateStr = product[attr];
            product[attr] = dateStr ? new Date(Date.parse(dateStr)) : null;
          },
        );
        [
          'thematicAreas',
          'executingAuthorityLevels',
          'competentAuthorityLevels',
          'targetAudiences',
          'relevantAdministrativeUnits',
        ].forEach((attr) => {
          const value = product[attr];
          product[attr] = value ? (Array.isArray(value) ? value : [value]) : [];
        });
        return product;
      },
    );
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.model = model;
    controller.searchTermBuffer = controller.searchTerm ?? '';
  }
}
