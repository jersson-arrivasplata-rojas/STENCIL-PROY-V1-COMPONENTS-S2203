import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-grid',
  styleUrl: 'grid.scss'
})
export class Grid {
  @Prop() padding?: string;

  private getStyles() {
    const styles = Object.assign({});
    (this.padding) ? styles.padding = this.padding : delete styles.padding;

    return styles;
  }

  render() {
    
    return (
      <div class='sami-grid' style={this.getStyles()}>
        <slot name="grid"></slot>
      </div>
    );
  }

}
