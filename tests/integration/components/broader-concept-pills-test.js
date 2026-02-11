import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-ipdc-enrichment/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

module('Integration | Component | broader-concept-pills', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders label for provided uri', async function (assert) {
    class StoreStub extends Service {
      findRecordByUri() {
        return Promise.resolve({ label: 'Example concept' });
      }
    }

    this.owner.register('service:store', StoreStub);

    this.set('uri', 'http://example.com/concept/1');

    await render(hbs`<BroaderConceptPills @uri={{this.uri}} />`);

    assert.dom().hasText('Example concept');
  });
});
