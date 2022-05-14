import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-card-image',
  styleUrl: 'card-image.scss'
})
export class CardImage {
  @Element() host: HTMLDivElement;
  children: Element[];

  @Prop() url: string = '#';

  samiImage: Element;

  class: string[] = [];
  constructor() {
    //console.log(this.host)
  }
  componentWillLoad(){
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';
    
    this.children = Array.from(this.host.children);
    const samTag = (this.children.find(element => (element.tagName).toLowerCase() === 'sami-span'));
    (samTag) ? samTag.slot = "tag" : null;
    const samImg = (this.children.find(element => (element.tagName).toLowerCase() === 'sami-img'));
    (samImg) ? samImg.slot = "background" : null;
    (samImg) ? samImg.classList.add('sami-card-image___background') : null;

    const samParagraphs = (this.children.filter(element => (element.tagName).toLowerCase() === 'sami-paragraph'));
    if (samParagraphs) {
      (samParagraphs.length > 0) ? samParagraphs[0].slot = "subtitle" : null;
      (samParagraphs.length > 0) ? samParagraphs[0].classList.add('sami-card-image___content-subtitle') : null;

      (samParagraphs.length > 1) ? samParagraphs[1].slot = "title" : null;
      (samParagraphs.length > 1) ? samParagraphs[1].classList.add('sami-card-image___content-title') : null;

    }
  }
  componentDidLoad() {

  }
  componentWillRender() {

 
  }

  private getClass(): string {

    return this.class.join(' ');
  }

  render() {
    return (
      <a class={`sami-card-image ${this.getClass()}`} href={this.url}>
        <slot name="tag"></slot>
        <slot name="background"></slot>
        <div class="sami-card-image___content">
          <slot name="subtitle"></slot>
          <slot name="title"></slot>
        </div>
      </a>
    );
  }
}