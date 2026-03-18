import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class IpdcServiceCardComponent extends Component {
  @service router;

  get badgeSkin() {
    return this.args.model.datePublished != undefined ? 'success' : 'grey'
  }

  get icon() {
    return this.args.model.datePublished != undefined ? 'check' : ''
  }

  @action
  handleClick() {
    this.router.transitionTo('public-services.edit', this.args.model.id);
  }
}
