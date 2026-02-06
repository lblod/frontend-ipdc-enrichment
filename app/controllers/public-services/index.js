import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import constants from 'frontend-ipdc-enrichment/config/constants';

const { CONCEPT_SCHEMES } = constants;

export default class PublicServicesIndexController extends Controller {
  @service router;

  @tracked searchTerm;
  @tracked searchTermBuffer;
  @tracked page = 0;
  @tracked size = 25;
  @tracked sort = '-date-created';

  queryParams = ['page', 'size', 'sort', 'searchTerm'];

  serviceTypeConceptScheme = CONCEPT_SCHEMES.SERVICE_TYPE_FILTER;
  themeConceptScheme = CONCEPT_SCHEMES.THEME_FILTER;
  authorityConceptScheme = CONCEPT_SCHEMES.COMPETENT_AUTHORITY_FILTER;

  sortingOptions = [
    { label: 'Relevantie', value: '' },
    { label: 'Nieuwste', value: '-date-created' },
    { label: 'Oudste', value: 'date-created' },
  ];

  
  @tracked searchTermBuffer;

  @action
  updateSearchTermBuffer(event) {
    this.searchTermBuffer = event.target.value;
  }

  @action
  search(event) {
    event.preventDefault();
    this.searchTerm = this.searchTermBuffer;
  }

  @action
  resetSearch() {
    this.searchTermBuffer = '';
    this.searchTerm = null;
  }

  @action
  setPage(page) {
    this.page = page;
  }

  @action
  setPageSize(size) {
    this.size = size;
    this.setPage(0);
  }

  @action
  setSorting(event) {
    this.sort = event.target.value;
  }
}