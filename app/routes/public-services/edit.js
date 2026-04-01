import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PublicServicesEditRoute extends Route {
  @service store;
  @service semanticFormRepository;

  async model(params) {
    const publicService = await this.store.findRecord(
      'public-service',
      params.id,
      { include: 'relevant-administrative-units' },
    );
    const form =
      await this.semanticFormRepository.getFormDefinition('public-service');
    return { publicService, form };
  }
}
