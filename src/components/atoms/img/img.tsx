import { Component, Element, h, Prop } from '@stencil/core';
import { filterInvert, objectFit, opacity } from '../../../functions/class.function';

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

  constructor() {
    this.class = (this.host.className).split(' ');
  }
  private getClass(): string {

    this.class.push(opacity(this.opacity));
    this.class.push(filterInvert(this.filterInvert));
    this.class.push(objectFit(this.objectFit));


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