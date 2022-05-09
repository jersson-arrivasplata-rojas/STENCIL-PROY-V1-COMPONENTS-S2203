import { newSpecPage } from '@stencil/core/testing';
import { Img } from '../img';

describe('@Img', () => {

  it('#should render a square avatar', async () => {
    const page = await newSpecPage({
      components: [Img],
      html: `<sami-card-tag></sami-card-tag>`
    });

    expect(page.root).toEqualHtml(`
    <a class="sami-card-image" href="#">
        <sami-card-tag text="1">
          <div>1</div>
        </sami-card-tag>
        <div class="sami-card-image___background" style="">
        </div>
        <div class="sami-card-image___content">
          <p class="sami-card-image___subtitle">{this.title}</p>
          <p class="sami-card-image___title">{this.subtitle}</p>
        </div>
      </a>`);
  });
});
