import { Component, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'sami-loader',
  styleUrl: 'loader.scss'
})
export class Loader {

  @State() isOpen: boolean = false;
  @Prop() type: string = "";

  @Method()
  async show() {
    this.isOpen = true;
  }


  @Method()
  async close() {
    this.isOpen = false;
  }


  render() {
    //{ 'sami-loader': true, 'sami-loader___active': this.isOpen }
    return (
      <div class={`sami-loader ${this.isOpen ? 'sami-loader___active' : ''} sami-loader___${this.type}`}>
        <slot></slot>
      </div>
    );
  }

}
