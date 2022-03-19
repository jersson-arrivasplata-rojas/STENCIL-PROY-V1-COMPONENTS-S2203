import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-flex-code-view',
  styleUrl: 'flex-code-view.scss'
})
export class FlexCodeView {

  @Prop() identify?: string = "";

  @Prop() carousel: boolean = false;

  render() {

    return (
      <div class={{ 'sami-flex-code-view': true, 'carousel': this.carousel }} id={this.identify} >
        <slot name="flex-code-view"></slot>
      </div>
    );
  }

}
