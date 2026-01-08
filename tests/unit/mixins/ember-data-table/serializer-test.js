/* eslint-disable ember/no-new-mixins */
/* eslint-disable ember/no-mixins */
import EmberObject from '@ember/object';
import EmberDataTableSerializerMixin from 'frontend-ipdc-enrichment/mixins/ember-data-table/serializer';
import { module, test } from 'qunit';

module('Unit | Mixin | ember-data-table/serializer', function () {
  // TODO: Replace this with your real tests.
  test('it works', function (assert) {
    let EmberDataTableSerializerObject = EmberObject.extend(
      EmberDataTableSerializerMixin,
    );
    let subject = EmberDataTableSerializerObject.create();
    assert.ok(subject);
  });
});
