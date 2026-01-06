import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-ipdc-enrichment/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | unique-alternative-names', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{unique-alternative-names this.inputValue}}`);

    assert.dom().hasText('1234');
  });
});
