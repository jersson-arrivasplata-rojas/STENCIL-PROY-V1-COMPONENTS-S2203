import { Component, Element, h, Prop } from '@stencil/core';
import { fontWeigth, textAlign, textColor, textDecoration, textTransform } from '../../../functions/class.function';

interface SamiHtmlDivElement extends HTMLDivElement {
  class:string;
}
@Component({
  tag: 'sami-paragraph',
  styleUrl: 'paragraph.scss'
})
export class Paragraph {
  @Element() host: SamiHtmlDivElement;
  children: Element[];
  class: string[] = [];

  @Prop() type="";

  @Prop() decoration?: string = '';

  @Prop() color?: string = '';

  @Prop() align?: string = '';

  @Prop() transform?: string = '';

  @Prop() weigth?: string = '';

  @Prop() heading?: string = '';

  constructor(){
  }

  componentWillLoad(){
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';
  }

  private getClass(): string {
    if (this.type==="subtitle") {
      this.class.push('sami-paragraph___subtitle')
    }
    if (this.type==="title") {
      this.class.push('sami-paragraph___title')
    }
    if (this.heading) {
      this.class.push('sami-'+this.heading)
    }
    this.class.push(textDecoration(this.decoration));

    this.class.push(textColor(this.color));

    this.class.push(textAlign(this.align));

    this.class.push(textTransform(this.transform));

    this.class.push(fontWeigth(this.weigth));


    return this.class.join(' ');
  }
  render() {
    return (
      <p class={`sami-paragraph ${this.getClass()}`}>
        <slot />
      </p>
    );
  }

}