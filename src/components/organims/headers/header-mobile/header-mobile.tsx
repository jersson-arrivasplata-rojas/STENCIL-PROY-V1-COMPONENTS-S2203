import { Component, Element, h, Prop } from '@stencil/core';
import { position } from '../../../../functions/class.function';

@Component({
  tag: 'sami-header-mobile',
  styleUrl: 'header-mobile.scss'
})
export class HeaderMobile {

  @Element() host: HTMLAnchorElement;

  @Prop() position?: string = 'fixed';

  class: string[] = [];

  constructor() {
    this.class = (this.host.className).split(' ');
    this.host.className = '';
  }


  private getClass(): string {
    this.class.push(position(this.position));
    return this.class.join(' ');
  }

  render() {
    return (
      <div class={`sami-header-mobile ${this.getClass()}`}>
        <slot></slot>
      </div>
    );
  }
}