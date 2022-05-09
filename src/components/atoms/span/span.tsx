import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'sami-span',
  styleUrl: 'span.scss'
})
export class Span {
  @Element() host: HTMLFormElement;
  children: Element[];
  class: string[] = [];
  constructor() {
    this.class = (this.host.className).split(' ');
    this.host.className ='';
  }
  private getClass(): string {

    return this.class.join(' ');
  }

  render() {
    return (
      <span class={`sami-span ${this.getClass()}`}>
        <slot></slot>
      </span>
    );
  }

}