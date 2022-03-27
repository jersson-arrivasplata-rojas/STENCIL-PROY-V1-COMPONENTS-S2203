import { Component, h, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'sami-sidebar',
  styleUrl: 'sidebar.scss'
})
export class Sidebar {

  @State() isMenuOpen: boolean = true;

  @Prop() boxShadow?: string;

  @Prop() background?: string;

  @Prop() zIndex?: number;

  @Prop() width?: string;

  @Prop() height?: string;

  @Prop() maxWidth?: string;

  @Prop() top?: number;

  @Prop() position?: string;


  @Prop() hyperlinkUrl?: string;

  @Prop() hyperlinkPadding?: string;

  @Prop() hyperlinkFilter?: string;

  @Prop() hyperlinkUrlImage?: string;

  @Listen('resize', { target: 'window' })
  handleScroll() {//e: Event
    //const target = e.target as Window;
    this.validateMenu();//target
  }


  constructor() {
    this.validateMenu();//window
  }


  private validateMenu() {//target: Window
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
      this.isMenuOpen = true;
    }
  }

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
    this.isMenuOpen = !this.isMenuOpen;
  }

  render() {
    return (
      <div class={{ 'sami-sidebar': true, 'active slide-in': this.isMenuOpen }} >
        <div class='sami-sidebar___hyperlink-menu'>
          <sami-hyperlink-icon url={this.hyperlinkUrl} target="" type="menu" padding={this.hyperlinkPadding} filter={this.hyperlinkFilter} onClick={() => this.menu()} url-image={this.hyperlinkUrlImage}></sami-hyperlink-icon>
        </div>
        <nav class='sami-sidebar___nav' style={this.getStyles()}>
          <div class='sami-sidebar___hyperlink-image'>
            <slot name="hyperlink-image" ></slot>
          </div>
          <div class='sami-sidebar___list-group'>
            <slot name="list-group" ></slot>
          </div>
          <div class='sami-sidebar___list-social-media'>
            <slot name="list-social-media" ></slot>
          </div>
        </nav>
      </div>
    );
  }

}
