import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-main',
  styleUrl: 'main.scss'
})
export class Main {

  @Prop() marginLeft?: string;

  private getStyles() {
    const styles = Object.assign({});
    (this.marginLeft) ? styles.marginLeft = this.marginLeft : delete styles.marginLeft;

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
