import { newSpecPage } from '@stencil/core/testing';
import { Subscriber } from '../subscriber';

describe('@Sidebar', () => {

  it('#should render a square avatar', async () => {
    const page = await newSpecPage({
      components: [Subscriber],
      html: `<sami-card-image></sami-card-image>`
    });

    expect(page.root).toEqualHtml(`
    <sami-card-image text="1">
      <div>1</div>
    </sami-card-image>`);
  });
});
