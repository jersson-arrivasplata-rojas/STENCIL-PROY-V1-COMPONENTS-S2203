import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'sami-form',
  styleUrl: 'form.scss'
})
export class Form {
  @Element() host: HTMLFormElement;
  children: Element[];
  class: string[] = [];
  method: string;
  action: string;
  constructor() {
  }
  componentWillLoad(){
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';
    
    this.method = this.host.method;
    this.action = this.host.action;
  }

  private getClass(): string {
    return this.class.join(' ');
  }

  render() {
    return (
      <form
        class={`sami-input ${this.getClass()}`}
        method={this.method}
        action={this.action}>
        <slot />
      </form>
    );
  }
}
