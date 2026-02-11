import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service session;
  @service router;
  @service semanticFormRepository;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
    this.router.replaceWith('public-services.index');
  }

  async model() {
    const form =
      await this.semanticFormRepository.getFormDefinition('public-service');
    return form;
  }
}
