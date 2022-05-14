import { Component, Element, h, Prop } from '@stencil/core';
import { position, textAlign } from '../../../functions/class.function';

@Component({
  tag: 'sami-tag',
  styleUrl: 'tag.scss'
})
export class Tag {
  @Element() host: HTMLDivElement;
  class: string[] = [];

  @Prop() position?: string = 'relative';
  @Prop() align?: string = 'left';
  @Prop() color = '';
  @Prop() background = '';
  @Prop() top = '';
  @Prop() bottom = '';
  @Prop() width = '';
  @Prop() height = '';
  @Prop() zIndex = '';
  @Prop() lineHeight = '';
  @Prop() fontWeight = '';
  @Prop() right = '';
  @Prop() left = 'initial';
  @Prop() borderRadius = '';
  @Prop() transition = '';
  /**
   * es: Transición del Tag
   * en: Transition of Tag
   * Example: filter 200ms linear, transform 200ms linear
   */
  constructor() {
  }
  componentWillLoad(){
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';
    
  }
  private getClass(): string {
    this.class.push(position(this.position));
    this.class.push(textAlign(this.align));
    return this.class.join(' ');
  }
  getStyles() {
    const styles = Object.assign({});
    (this.color) ? styles.color = this.color : delete styles.color;
    (this.background) ? styles.background = this.background : delete styles.background;
    (this.top) ? styles.top = this.top : delete styles.top;
    (this.bottom) ? styles.bottom = this.bottom : delete styles.bottom;
    (this.width) ? styles.width = this.width : delete styles.width;
    (this.height) ? styles.height = this.height : delete styles.height;
    (this.zIndex) ? styles.zIndex = this.zIndex : delete styles.zIndex;
    (this.lineHeight) ? styles.lineHeight = this.lineHeight : delete styles.lineHeight;
    (this.fontWeight) ? styles.fontWeight = this.fontWeight : delete styles.fontWeight;
    (this.right) ? styles.right = this.right : delete styles.right;
    (this.left) ? styles.left = this.left : delete styles.left;
    (this.borderRadius) ? styles.borderRadius = this.borderRadius : delete styles.borderRadius;
    (this.transition) ? styles.transition = this.transition : delete styles.transition;
    return styles;
  }
  render() {
    return (
      <span class={`sami-tag ${this.getClass()}`} style={this.getStyles()}>
        <slot />
      </span>
    );
  }

}