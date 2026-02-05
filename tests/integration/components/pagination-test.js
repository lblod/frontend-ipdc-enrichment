import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-ipdc-enrichment/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pagination', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Pagination />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Pagination>
        template block text
      </Pagination>
    `);

    assert.dom().hasText('template block text');
  });
});
