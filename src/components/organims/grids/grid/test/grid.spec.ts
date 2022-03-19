import { newSpecPage } from '@stencil/core/testing';
import { Grid } from '../grid';

describe('@Grid', () => {

  it('#should render a square avatar', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<sami-card-image></sami-card-image>`
    });

    expect(page.root).toEqualHtml(`
    <sami-card-image text="1">
      <div>1</div>
    </sami-card-image>`);
  });
});
