import { Component, Element, h, Prop } from '@stencil/core';
import { display, filterInvert, margin, objectFit, opacity } from '../../../functions/class.function';

@Component({
  tag: 'sami-img',
  styleUrl: 'img.scss'
})
export class Img {
  @Element() host: HTMLElement;

  /**
   * es: Transición del Tag
   * en: Transition of Tag
   * Example: filter 200ms linear, transform 200ms linear
   */
  class: string[] = [];
  @Prop() src?: string;
  @Prop() alt?: string;
  @Prop() height?: string;
  @Prop() width?: string;

  @Prop() opacity?: string = '0';
  @Prop() filterInvert?: string = '0';
  @Prop() objectFit?: string = 'cover';
  @Prop() display?: string = 'block';
  @Prop() margin?: string = 'auto';

  constructor() {
  }
  
  componentWillLoad(){
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';
  }

  private getClass(): string {

    this.class.push(opacity(this.opacity));
    this.class.push(filterInvert(this.filterInvert));
    this.class.push(objectFit(this.objectFit));
    this.class.push(display(this.display));
    this.class.push(margin(this.margin));


    return this.class.join(' ');
  }

  render() {
    return (
      <img
        class={`sami-img ${this.getClass()}`}
        src={this.src}
        alt={this.alt}
        height={this.height}
        width={this.width} />
    );
  }

}