import { setupTest } from 'frontend-ipdc-enrichment/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | bestuurseenheid classificatie code', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('bestuurseenheid-classificatie-code', {});
    assert.ok(model, 'model exists');
  });
});
