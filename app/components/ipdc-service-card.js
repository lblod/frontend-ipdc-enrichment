import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class IpdcServiceCardComponent extends Component {
  @service router;

  get badgeSkin() {
    if (this.args.model?.relevantAdministrativeUnits?.length) {
      return 'success';
    } else {
      return 'grey';
    }
  }

  get icon() {
    if (this.args.model?.relevantAdministrativeUnits?.length) {
      return 'check';
    } else {
      return '';
    }
  }

  @action
  handleClick() {
    this.router.transitionTo('public-services.edit', this.args.model.id);
  }
}
