import { Component, h } from '@stencil/core';

@Component({
  tag: 'sami-flex-code',
  styleUrl: 'flex-code.scss'
})
export class FlexCode {
  render() {
    
    return (
      <div class='sami-flex-code' >
        <slot name="flex-code"></slot>
      </div>
    );
  }

}
