import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class PublicServicesEditController extends Controller {
  @service store;
  @tracked relevantAdministrativeUnits = this.model.publicService?.relevantAdministrativeUnits ?? [];

  get badgeSkin() {
    return this.relevantAdministrativeUnits?.length ? 'success' : 'grey';
  }
  get icon() {
    return this.relevantAdministrativeUnits?.length ? 'check' : '';
  }

  @action
  async onSave() {
    const refreshed = await this.store.findRecord(
      'public-service',
      this.model.publicService.id,
      { reload: true, include: 'relevant-administrative-units' }
    );
    this.model.publicService = refreshed;
  }
}
