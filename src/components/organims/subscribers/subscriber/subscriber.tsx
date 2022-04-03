import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'sami-subscriber',
  styleUrl: 'subscriber.scss'
})
export class Subscriber {

  @State() isOpen: boolean = false;

  @Prop() boxShadow?: string;

  @Prop() background?: string;

  @Prop() zIndex?: number;

  @Prop() width?: string;

  @Prop() height?: string;

  @Prop() maxWidth?: string;

  @Prop() top?: number;

  @Prop() position?: string;


  @Prop() hyperlinkUrl?: string = "#";

  @Prop() hyperlinkPadding?: string;

  @Prop() hyperlinkFilter?: string;

  @Prop() hyperlinkIconUrlImage?: string;

  @Prop() hyperlinkText?: string;

  @Prop() hyperlinkIconWidth?: number;

  @Prop() hyperlinkIconHeight?: number;

  @Prop() hyperlinkIconPadding?: string;



  /**
   * es: Retorna un json de estilos
   * en: Return a json of styles
   */
  private getStyles() {
    const styles = Object.assign({});
    (this.boxShadow) ? styles.boxShadow = this.boxShadow : delete styles.boxShadow;
    (this.background) ? styles.background = this.background : delete styles.background;
    (this.zIndex) ? styles.zIndex = this.zIndex : delete styles.zIndex;
    (this.width) ? styles.width = this.width : delete styles.width;
    (this.height) ? styles.height = this.height : delete styles.height;
    (this.maxWidth) ? styles.maxWidth = this.maxWidth : delete styles.maxWidth;
    (this.top) ? styles.top = this.top : delete styles.top;
    (this.position) ? styles.position = this.position : delete styles.position;

    return styles;
  }

  private menu() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <div class={{ 'sami-subscriber': true, 'active slide-in': this.isOpen }} >
        <div class='sami-subscriber___hyperlink'>
          <sami-hyperlink url={this.hyperlinkUrl} target="_self" text={this.hyperlinkText} padding={this.hyperlinkPadding} onClick={() => this.menu()} ></sami-hyperlink>
        </div>
        <div class='sami-subscriber___div' style={this.getStyles()}>
          <div class='sami-subscriber___close'>
            <sami-hyperlink-icon url="#" target="_self" width-image={this.hyperlinkIconWidth} height-image={this.hyperlinkIconHeight} urlImage={this.hyperlinkIconUrlImage} padding={this.hyperlinkIconPadding} onClick={() => this.menu()} ></sami-hyperlink-icon>
          </div>
          <slot name='form-subscriber'></slot>
        </div>
      </div>
    );
  }

}
