import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class PublicServicesEditController extends Controller {
  @service store;

  get hasAdminUnits() {
    return (
      (this.model.publicService.relevantAdministrativeUnits?.length ?? 0) > 0
    );
  }

  get badgeSkin() {
    return this.hasAdminUnits ? 'success' : 'grey';
  }

  get icon() {
    return this.hasAdminUnits ? 'check' : '';
  }

  @action
  async onSave() {
    await this.model.publicService.reload({
      include: 'relevant-administrative-units',
    });
  }
}
