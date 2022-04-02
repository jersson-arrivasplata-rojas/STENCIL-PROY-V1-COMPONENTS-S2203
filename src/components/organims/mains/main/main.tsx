import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-main',
  styleUrl: 'main.scss'
})
export class Main {

  @Prop() width?: string;

  private getStyles() {
    const styles = Object.assign({});
    (this.width) ? styles.width = this.width : delete styles.width;

    return styles;
  }
  render() {

    return (
      <div class='sami-main' style={this.getStyles()}>
        <slot name="main"></slot>
      </div>
    );
  }

}
