import { module, test } from 'qunit';
import { setupTest } from 'frontend-ipdc-enrichment/tests/helpers';

module('Unit | Controller | public-services/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:public-services/index');
    assert.ok(controller);
  });
});
