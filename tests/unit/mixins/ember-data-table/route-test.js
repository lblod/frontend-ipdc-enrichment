/* eslint-disable ember/no-new-mixins */
/* eslint-disable ember/no-mixins */
import EmberObject from '@ember/object';
import EmberDataTableRouteMixin from 'frontend-ipdc-enrichment/mixins/ember-data-table/route';
import { module, test } from 'qunit';

module('Unit | Mixin | ember-data-table/route', function () {
  // TODO: Replace this with your real tests.
  test('it works', function (assert) {
    let EmberDataTableRouteObject = EmberObject.extend(
      EmberDataTableRouteMixin,
    );
    let subject = EmberDataTableRouteObject.create();
    assert.ok(subject);
  });
});
