import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PublicServicesEditController extends Controller {
  @service store;
  @service toaster;

  @tracked isPublishing = false;

  get isPublished() {
    return this.model.publicService.datePublished != undefined
  }

  get badgeSkin() {
    return this.isPublished ? 'success' : 'grey';
  }

  get icon() {
    return this.isPublished ? 'check' : '';
  }

  @action
  async onSave() {
    await this.model.publicService.reload({
      include: 'relevant-administrative-units',
    });
  }

  @action
  async publish() {
    this.isPublishing = true;
    try {
      this.model.publicService.datePublished = new Date();
      await this.model.publicService.save();
      this.toaster.success('Publicatie succesvol.', 'Gepubliceerd', { timeOut: 5000 });
    } catch (error) {
      this.toaster.error('Probeer het later nog eens.', 'Publiceren mislukt', { timeOut: 60000 });
      throw error;
    } finally {
      this.isPublishing = false;
    }
  }
}
