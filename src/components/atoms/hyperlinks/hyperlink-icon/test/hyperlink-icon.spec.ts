import { newSpecPage } from '@stencil/core/testing';
import { HyperlinkIcon } from '../hyperlink-icon';

describe('@CardImage', () => {

  it('#should render a square avatar', async () => {
    const page = await newSpecPage({
      components: [HyperlinkIcon],
      html: `<sami-card-image></sami-card-image>`
    });

    expect(page.root).toEqualHtml(`
    <sami-card-image text="1">
      <div>1</div>
    </sami-card-image>`);
  });
});
