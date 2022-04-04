import { Component, h, Method, State } from '@stencil/core';

@Component({
  tag: 'sami-loader',
  styleUrl: 'loader.scss'
})
export class Loader {

  @State() isOpen: boolean = false;

  //@Event() open: EventEmitter<boolean>;

  @Method() // Con este decorator, exponemos el método al DOM
  async show(){
    this.isOpen = true;
  }


  @Method() // Con este decorator, exponemos el método al DOM
  async close(){
    this.isOpen = false;
  }



  render() {
    return (
      <div class={{'sami-loader':true, 'sami-loader___active':this.isOpen}}>
        <slot name="loader"></slot>
      </div>
    );
  }

}
