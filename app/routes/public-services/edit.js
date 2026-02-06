import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PublicServicesEditRoute extends Route {
  @service store;
  @service semanticFormRepository;

  async model(params) {
    const publicService = await this.store.findRecord(
      'public-service',
      params.id,
    );
    const form =
      await this.semanticFormRepository.getFormDefinition('contactpunt');
    return { publicService, form };
  }
}
