import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service session;
  @service currentSession;
  @service router;

  appTitle = 'IPDC Enrichment';

  get userInfo() {
    let user;
    let group;
    let classification;

    user = this.currentSession.user;
    group = this.currentSession.group;
    classification = this.currentSession.groupClassification;

    if (!user) {
      return '';
    }

    let userInfo = user.fullName;
    let groupInfo = '';

    if (classification?.label) {
      groupInfo += classification.label;
    }

    if (group?.naam) {
      groupInfo += ` ${group.naam}`;
    }

    groupInfo.trim();

    if (groupInfo.length) {
      userInfo += ` - ${groupInfo}`;
    }

    return userInfo;
  }
}
