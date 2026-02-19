import Controller from '@ember/controller';

export default class PublicServicesEditController extends Controller {
  get badgeSkin() {
    if (this.model.publicService?.relevantAdministrativeUnits?.length) {
      return 'success';
    } else {
      return 'grey';
    }
  }

  get icon() {
    if (this.model.publicService?.relevantAdministrativeUnits?.length) {
      return 'check';
    } else {
      return '';
    }
  }
}
