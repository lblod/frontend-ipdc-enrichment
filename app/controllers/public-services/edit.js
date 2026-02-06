import Controller from '@ember/controller';

export default class PublicServicesEditController extends Controller {
  get badgeSkin() {
    if (this.model.publicService.relevantAdministrativeUnits) {
      return 'success';
    } else {
      return 'grey';
    }
  }

  get icon() {
    if (this.model.publicService.relevantAdministrativeUnits) {
      return 'check';
    } else {
      return '';
    }
  }
}
