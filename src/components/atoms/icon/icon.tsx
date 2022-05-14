import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'sami-icon',
  styleUrl: 'icon.scss'
})
export class Icon {
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
      <i class={`sami-icon ${this.getClass()}`}></i>
    );
  }

}