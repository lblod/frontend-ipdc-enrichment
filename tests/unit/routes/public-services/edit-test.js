import { module, test } from 'qunit';
import { setupTest } from 'frontend-ipdc-enrichment/tests/helpers';

module('Unit | Route | public-services/edit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:public-services/edit');
    assert.ok(route);
  });
});
