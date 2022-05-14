import { Component, Element, h } from '@stencil/core';
//import { Utils } from '@jersson-arrivasplata-rojas/sami-utils/src/index';

@Component({
  tag: 'sami-span',
  styleUrl: 'span.scss'
})
export class Span {
  @Element() host: HTMLFormElement;
  children: Element[];
  class: string[] = [];
  constructor() {
  }
  componentWillLoad(){
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';
    
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