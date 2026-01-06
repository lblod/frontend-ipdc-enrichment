import { module, test } from 'qunit';
import { setupTest } from 'frontend-ipdc-enrichment/tests/helpers';

module('Unit | Route | legaal/disclaimer', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:legaal/disclaimer');
    assert.ok(route);
  });
});
