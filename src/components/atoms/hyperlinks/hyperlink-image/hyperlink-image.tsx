import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-hyperlink-image',
  styleUrl: 'hyperlink-image.scss'
})
export class HyperlinkImage {

  /**
   * es: Ruta que redirige del card image
   * en: Route of redirect card image
   * Example: localhost/css3
   */
  @Prop() padding?: string;

  /**
   * es: Ruta que redirige del card image
   * en: Route of redirect card image
   * Example: localhost/css3
   */
  @Prop() url: string = '#';

  /**
   * es: Ruta que redirige del card image
   * en: Route of redirect card image
   * Example: localhost/css3
   */
  @Prop() text: string = '';


  @Prop() backgroundImage?: string;

  @Prop() maxWidth?: string;

  @Prop() background?: string;

  @Prop() borderRadius?: string;


  @Prop() refFunction?: () => void = ()=>{};


  @Prop() target: string = "_self";
  /**
   * es: Retorna un json de estilos
   * en: Return a json of styles
   */
  private getHyperlinkStyles() {
    const styles = Object.assign({});
    (this.padding) ? styles.padding = this.padding : delete styles.padding;

    return styles;
  }

  /**
   * es: Retorna un json de estilos
   * en: Return a json of styles
   */
  private getImageStyles() {
    const styles = Object.assign({});
    (this.background) ? styles.background = this.background : delete styles.background;
    (this.maxWidth) ? styles.maxWidth = this.maxWidth : delete styles.maxWidth;
    (this.borderRadius) ? styles.borderRadius = this.borderRadius : delete styles.borderRadius;

    return styles;
  }

  render() {
    return (
      <a href={this.url} onClick={this.refFunction.bind(this)}  style={this.getHyperlinkStyles()} target={this.target}>
        <img src={this.backgroundImage} style={this.getImageStyles()}/>
      </a>
    );
  }

}
