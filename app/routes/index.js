import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service session;
  @service semanticFormRepository;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model() {
    const form =
      await this.semanticFormRepository.getFormDefinition('contactpunt');
    console.log(form);
    return form;
  }
}
