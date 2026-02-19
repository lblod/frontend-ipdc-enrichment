import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { registerFormFields } from '@lblod/ember-submission-form-fields';
import RdfFormFieldsDisabledTextArea from 'frontend-ipdc-enrichment/components/rdf-form-fields/disabled-text-area';

export default class PublicServicesEditRoute extends Route {
  @service store;
  @service semanticFormRepository;

  constructor() {
    super(...arguments);

    this.registerTableFields();
  }

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

  registerTableFields() {
    registerFormFields([
      {
        displayType: 'http://lblod.data.gift/display-types/disabledTextArea',
        edit: RdfFormFieldsDisabledTextArea,
        show: RdfFormFieldsDisabledTextArea,
      },
    ]);
  }
}
