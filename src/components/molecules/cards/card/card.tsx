import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'sami-card',
  styleUrl: 'card.scss'
})
export class Card {
  @Element() host: HTMLDivElement;
  children: Element[];
  class: string[] = [];

  constructor() {
  }
  componentWillLoad(){
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';

    this.children = Array.from(this.host.children);

    (this.children).forEach(x => {
      const part = Array.from(x['part']);
      if (part && part[0] == 'header') x.slot = 'header';
      if (part && part[0] == 'body') x.slot = 'body';
      if (part && part[0] == 'footer') x.slot = 'footer';

      if (x.slot == 'header') {
        x.classList.add('sami-card___header')
      } else if (x.slot == 'body') {
        x.classList.add('sami-card___body')
      } else if (x.slot == 'footer') {
        x.classList.add('sami-card___footer')
      }
    });
    
  }
  private getClass(): string {

    return this.class.join(' ');
  }
  render() {
    return (
      <div class={`sami-card ${this.getClass()}`}>
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    );
  }
}
/**
 *       
      <div class="sami-card">
        <div class="sami-card___header">
          <img src={this.imageSrc} />
        </div>
        <div class="sami-card___body">
          <p class="sami-card___subtitle">{this.cardSubtitle}</p>
          <p class="sami-card___title">{this.cardTitle}</p>
          <p class="sami-card___resume">{this.cardResume}</p>
          <p class="sami-card___links">
            <slot name="list-social-media" ></slot>

          </p>
        </div>
        <div class="sami-card___footer">
          <slot name="list-group" ></slot>
        </div>
        
 */