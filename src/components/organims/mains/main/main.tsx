import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-main',
  styleUrl: 'main.scss',
  shadow: false
})
export class Main {
  @Element() host: HTMLDivElement;
  @Prop() width?: string;
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
    (this.width) ? styles.width = this.width : delete styles.width;

    return styles;
  }

  private getClass(): string {

    return this.class.join(' ');
  }
  render() {
    //    <slot></slot>
    return (
      <div class={`sami-main ${this.getClass()}`} style={this.getStyles()}>
        <slot name="main"></slot>
      </div>
    );
  }

}
