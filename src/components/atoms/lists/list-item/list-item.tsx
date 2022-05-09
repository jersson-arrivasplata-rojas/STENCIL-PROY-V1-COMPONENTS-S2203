import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-list-item',
  styleUrl: 'list-item.scss'
})
export class ListItem {
  @Element() host: HTMLDivElement;
  children: Element[];
  class: string[] = [];

  @Prop() type?: string = 'unorder';

  //@Element() el: HTMLElement;
  /**
   * es: Transición del Tag
   * en: Transition of Tag
   * Example: filter 200ms linear, transform 200ms linear
   */
  //@Prop({"reflect": true}) class?: string = '';

  //@Prop({"reflect": true}) datatitle?: boolean = false;

  //@Prop({"reflect": true}) subtitle?: boolean = false;

  constructor() {
    this.class = (this.host.className).split(' ');
    this.host.className = '';

  }
  private getClass(): string {

    return this.class.join(' ');
  }

  render() {
    return (
      <li class={`sami-list-item ${this.getClass()}`}>
        <slot />
      </li>
    );
  }

}