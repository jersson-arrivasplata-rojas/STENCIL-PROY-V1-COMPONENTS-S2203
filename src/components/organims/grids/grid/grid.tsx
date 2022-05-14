import { Component, Element, h, Prop } from '@stencil/core';
import { justifyItems } from '../../../../functions/class.function';

@Component({
  tag: 'sami-grid',
  styleUrl: 'grid.scss'
})
export class Grid {
  @Element() host: HTMLDivElement;
  @Prop() align?: string = 'center';
  @Prop() type?: string = 'card';
  @Prop() padding?: string;
  class: string[] = [];

  constructor() {
  }

  componentWillLoad(){
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';
    
  }
  private getStyles() {
    const styles = Object.assign({});
    (this.padding) ? styles.padding = this.padding : delete styles.padding;

    return styles;
  }

  private getClass(): string {
    if (this.type==="card") {
      this.class.push('sami-grid___card')
    }
    if (this.type==="slider") {
      this.class.push('sami-grid___slider')
    }
    this.class.push(justifyItems(this.align));
    return this.class.join(' ');
  }
  render() {

    return (
      <div class={`sami-grid ${this.getClass()}`} style={this.getStyles()}>
        <slot></slot>
      </div>
    );
  }

}
