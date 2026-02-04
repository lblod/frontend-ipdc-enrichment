import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-ipdc-enrichment/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | broader-concept-pills', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BroaderConceptPills />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <BroaderConceptPills>
        template block text
      </BroaderConceptPills>
    `);

    assert.dom().hasText('template block text');
  });
});
