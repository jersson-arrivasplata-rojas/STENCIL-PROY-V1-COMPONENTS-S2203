import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-grid',
  styleUrl: 'grid.scss'
})
export class Grid { 
  @Element() host: HTMLDivElement;

  @Prop() padding?: string;
  class: string[] = [];

  constructor() {
    this.class = (this.host.className).split(' ');
    this.host.className = '';
  }
  private getStyles() {
    const styles = Object.assign({});
    (this.padding) ? styles.padding = this.padding : delete styles.padding;

    return styles;
  }

  private getClass(): string {

    return this.class.join(' ');
  }
  render() {
    
    return (
      <div class={`sami-grid ${this.getClass()}`} style={this.getStyles()}>
        <slot name="grid"></slot>
      </div>
    );
  }

}
