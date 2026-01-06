import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'frontend-ipdc-enrichment/config/environment';
import { silenceEmptySyncRelationshipWarnings } from './utils/ember-data';

import './config/custom-inflector-rules';

silenceEmptySyncRelationshipWarnings();

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
