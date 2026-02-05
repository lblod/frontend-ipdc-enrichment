import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-ipdc-enrichment/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pill-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PillList />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PillList>
        template block text
      </PillList>
    `);

    assert.dom().hasText('template block text');
  });
});
