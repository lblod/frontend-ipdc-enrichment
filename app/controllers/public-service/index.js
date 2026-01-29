import Controller from '@ember/controller';

export default class PublicServiceIndexController extends Controller {    
    get showTableLoader() {
    return this.model.loadPublicServices.isRunning;
    }
    
    get hasResults() {
    return this.model?.length > 0;
    }

    get hasErrored() {
    return this.model.isError;
    }
}
