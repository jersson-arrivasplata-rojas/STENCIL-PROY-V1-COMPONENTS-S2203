import { newSpecPage } from '@stencil/core/testing';
import { CardCode } from '../card-code';

describe('@CardCode', () => {

  it('#should render a square avatar', async () => {
    const page = await newSpecPage({
      components: [CardCode],
      html: `<sami-card-image></sami-card-image>`
    });

    expect(page.root).toEqualHtml(`
    <sami-card-image text="1">
      <div>1</div>
    </sami-card-image>`);
  });
});
