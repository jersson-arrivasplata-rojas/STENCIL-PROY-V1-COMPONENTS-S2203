import { Component, Element, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'sami-subscriber',
  styleUrl: 'subscriber.scss'
})
export class Subscriber {
  @Element() host: HTMLDivElement;

  class: string[] = [];
  children: Element[];

  @Prop() toggle: (e: MouseEvent) => void;

  @State() isOpen: boolean = false;

  constructor() {
  }
	componentWillLoad() {
		
		const className: string = this.host.className;
		this.class = (className).split(' ');
		this.host.className = '';

    this.children = Array.from(this.host.children);
    (this.children).forEach(x => {
      const part = Array.from(x['part']);
      if (part && part[0] == 'close') x.slot = 'close';
      if (part && part[0] == 'body') x.slot = 'body';

      if (x.slot == 'close') {
        x.classList.add('sami-subscriber___close')
        x.addEventListener('click', this.show.bind(this))
      }/* else if (x.slot == 'body') {
        x.classList.add('sami-subscriber___body')
      }*/
    })
	}
  @Method()
  async show() {
    this.isOpen = !this.isOpen;
  }

  private getClass(): string {

    return this.class.join(' ');
  }

  render() {

    //${((this.isOpen)?'sami-subscriber___active':'')} onClick={this.toggle.bind(this)}
    //{ 'sami-subscriber': true, 'sami-subscriber___active': this.isOpen }
    return (
      <div class={`sami-subscriber ${this.getClass()} ${this.isOpen ? 'sami-subscriber___active' : ''}`} >
        <div class='sami-subscriber___body' >
          <slot name='close' />
          <slot name='body' />
        </div>
        <div class='sami-subscriber___backdrop'></div>
      </div>
    );
  }

}
