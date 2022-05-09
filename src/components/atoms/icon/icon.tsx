import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'sami-icon',
  styleUrl: 'icon.scss'
})
export class Icon {
  @Element() host: HTMLFormElement;
  children: Element[];
  class: string='';
  constructor() {
    this.class = this.host.className;
    this.host.className ='';
  }

  render() {
    return (
      <i class={`sami-icon ${this.class}`}></i>
    );
  }

}