import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class IpdcServiceCardComponent extends Component {
  @service router;

  @action
  handleClick(e) {
    this.router.transitionTo('public-services.edit', this.args.model.id);
  }
}
