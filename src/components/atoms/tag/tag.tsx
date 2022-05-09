import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'sami-tag',
  styleUrl: 'tag.scss'
})
export class Tag {
  @Element() host: HTMLDivElement;
  class: string[] = [];

  /**
   * es: Transición del Tag
   * en: Transition of Tag
   * Example: filter 200ms linear, transform 200ms linear
   */
  constructor() {
    this.class = (this.host.className).split(' ');
    this.host.className = '';
  }
  private getClass(): string {

    return this.class.join(' ');
  }
  render() {
    return (
      <span class={`sami-tag ${this.getClass()}`}>
        <slot />
      </span>
    );
  }

}