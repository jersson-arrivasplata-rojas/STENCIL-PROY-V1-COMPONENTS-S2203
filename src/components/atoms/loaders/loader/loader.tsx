import { Component, h, Method, Event, EventEmitter, State, Prop } from '@stencil/core';

@Component({
  tag: 'sami-loader',
  styleUrl: 'loader.scss'
})
export class Loader {

  @State() isOpen: boolean = false;

  //@Event() open: EventEmitter<boolean>;

  @Method() // Con este decorator, exponemos el método al DOM
  show(): void {
    this.isOpen = true;
  }


  @Method() // Con este decorator, exponemos el método al DOM
  close(): void {
    this.isOpen = false;
  }



  render() {
    return (
      <div class={{'sami-loader':true, 'active':this.isOpen}}>
        <slot name="loader"></slot>
      </div>
    );
  }

}
