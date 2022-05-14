import { Component, Element, h, Host, Prop } from '@stencil/core';
import { alignItems, display, position } from '../../../../functions/class.function';

@Component({
  tag: 'sami-header',
  styleUrl: 'header.scss'
})
export class Header {

  @Element() host: HTMLAnchorElement;

  @Prop() position?: string = 'fixed';

  @Prop() desktop?: boolean = false;

  @Prop() display?: string = 'flex';

  @Prop() align?: string = 'flex';
  
  //  @Prop() zIndex?: number = 0;

  class: string[] = [];

  constructor() {
  }
  componentWillLoad() {
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';

  }

  private getClass(): string {
    if (this.desktop) {
      this.class.push('sami-header___desktop');
    }


    this.class.push(alignItems(this.align));
    this.class.push(display(this.display));
    this.class.push(position(this.position));
    return this.class.join(' ');
  }

  render() {
    return (
      <Host class={`sami-header ${this.getClass()}`}>
        <slot></slot>
      </Host>
    );
  }
}

/**
 * 

      <div class={`sami-header ${this.getClass()}`}>
        
      </div>
 */
