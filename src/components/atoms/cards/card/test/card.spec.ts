import { newSpecPage } from '@stencil/core/testing';
import { Card } from '../card';

describe('@Card', () => {

  it('#should render a square avatar', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<sami-card></sami-card>`
    });

    expect(page.root).toEqualHtml(`
    <sami-card text="1">
      <div>1</div>
    </sami-card>`);
  });
});
