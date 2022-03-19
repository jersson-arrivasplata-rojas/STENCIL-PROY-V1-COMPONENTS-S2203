import { newSpecPage } from '@stencil/core/testing';
import { ListSocialMedia } from '../list-social-media';

describe('@ListSocialMedia', () => {

  it('#should render a square avatar', async () => {
    const page = await newSpecPage({
      components: [ListSocialMedia],
      html: `<sami-card-image></sami-card-image>`
    });

    expect(page.root).toEqualHtml(`
    <sami-card-image text="1">
      <div>1</div>
    </sami-card-image>`);
  });
});
