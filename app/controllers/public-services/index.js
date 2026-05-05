import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import constants from 'frontend-ipdc-enrichment/config/constants';
import { isEmpty } from '@ember/utils';

const { CONCEPT_SCHEMES } = constants;

export default class PublicServicesIndexController extends Controller {
  @service router;

  @tracked searchTerm;
  @tracked searchTermBuffer;
  @tracked doelgroep;
  @tracked gepubliceerd;
  @tracked types = [];
  @tracked themes = [];
  @tracked authorities = [];
  @tracked administrativeUnits = [];
  @tracked page = 0;
  @tracked size = 25;
  @tracked sort = '-date-created';

  @tracked themeRecords;
  @tracked typeRecords;
  @tracked authorityRecords;
  @tracked administrativeUnitRecords;

  queryParams = [
    'page',
    'size',
    'sort',
    'searchTerm',
    'doelgroep',
    'gepubliceerd',
  ];

  serviceTypeConceptScheme = CONCEPT_SCHEMES.SERVICE_TYPE_FILTER;
  themeConceptScheme = CONCEPT_SCHEMES.THEME_FILTER;
  authorityConceptScheme = CONCEPT_SCHEMES.COMPETENT_AUTHORITY_FILTER;

  sortingOptions = [
    { label: 'Relevantie', value: '' },
    { label: 'Nieuwste', value: '-date-created' },
    { label: 'Oudste', value: 'date-created' },
  ];

  doelgroepOptions = [
    { label: 'Alle resultaten', value: '' },
    { label: 'Enkel met doelgroep', value: 'true' },
    { label: 'Enkel zonder doelgroep', value: 'false' },
  ];

  gepubliceerdOptions = [
    { label: 'Alle resultaten', value: '' },
    { label: 'Enkel gepubliceerd', value: 'true' },
    { label: 'Enkel niet gepubliceerd', value: 'false' },
  ];

  @action
  updateSearchTermBuffer(event) {
    this.searchTermBuffer = event.target.value;
  }

  @action
  search(event) {
    event.preventDefault();
    this.withUpdateSortAndResetPage(() => {
      this.searchTerm = this.searchTermBuffer;
    });
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

  @action
  setDoelgroep(event) {
    this.page = 0;
    this.doelgroep = event.target.value;
  }

  @action
  setGepubliceerd(event) {
    this.page = 0;
    this.gepubliceerd = event.target.value;
  }

  @action
  updateThemeFilter(themes) {
    this.withUpdateSortAndResetPage(() => {
      this.themes = themes.map((record) => record.id);
    });
  }

  @action
  updateServiceTypeFilter(types) {
    this.withUpdateSortAndResetPage(() => {
      this.types = types.map((record) => record.id);
    });
  }

  @action
  updateAuthorityFilter(authorities) {
    this.withUpdateSortAndResetPage(() => {
      this.authorities = authorities.map((record) => record.id);
    });
  }

  @action
  updateAdministrativeUnitFilter(administrativeUnits) {
    this.withUpdateSortAndResetPage(() => {
      this.administrativeUnits = administrativeUnits.map((record) => record.id);
      this.useDefaultAdminUnitFilter = false;
    });
  }

  withUpdateSortAndResetPage(callback) {
    const isEmptySearch = () => {
      return (
        isEmpty(this.searchTerm) &&
        isEmpty(this.themes) &&
        isEmpty(this.types) &&
        isEmpty(this.authorities) &&
        isEmpty(this.administrativeUnits)
      );
    };

    const searchWasEmpty = isEmptySearch();
    callback();
    const searchIsPresent = !isEmptySearch();

    if (searchWasEmpty && searchIsPresent) {
      // User started filering/searching => sort by 'score' by default
      this.sort = 'score';
    } else if (!searchWasEmpty && !searchIsPresent && this.sort == 'score') {
      // User stopped filering/searching => sort by 'newest' by default
      this.sort = '-date-created';
    }

    this.setPage(0);
  }
}
