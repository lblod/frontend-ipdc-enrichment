import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service session;
  @service router;
  @service semanticFormRepository;

  beforeModel(transition) {
    this.router.replaceWith('public-services.index');
    this.session.requireAuthentication(transition, 'login');
  }

  async model() {
    const form =
      await this.semanticFormRepository.getFormDefinition('contactpunt');
    console.log(form);
    return form;
  }
}
