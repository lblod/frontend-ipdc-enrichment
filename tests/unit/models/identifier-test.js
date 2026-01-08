import { setupTest } from 'frontend-ipdc-enrichment/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | identifier', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('identifier', {});
    assert.ok(model, 'model exists');
  });
});
