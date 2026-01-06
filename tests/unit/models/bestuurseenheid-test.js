import { setupTest } from 'frontend-ipdc-enrichment/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | bestuurseenheid', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('bestuurseenheid', {});
    assert.ok(model, 'model exists');
  });
});
