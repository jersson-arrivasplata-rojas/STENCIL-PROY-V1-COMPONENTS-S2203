import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-hyperlink-icon',
  styleUrl: 'hyperlink-icon.scss'
})
export class HyperlinkIcon {
  
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
  @Prop() filter?: string;
  
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
  @Prop() type: string = 'github';

  /**
   * es: Ruta que redirige del card image
   * en: Route of redirect card image
   * Example: localhost/css3
   */
  @Prop() width: number = 26;

  /**
   * es: Ruta que redirige del card image
   * en: Route of redirect card image
   * Example: localhost/css3
   */
  @Prop() height: number = 26;

  @Prop() target: string = "_blank";

  @Prop() urlImage: string = "";



  @Prop() fnClick?: () => void = () => { };
  /**
   * es: Retorna un json de estilos
   * en: Return a json of styles
   */
  private getStyles() {
    const styles = Object.assign({});
    (this.padding) ? styles.padding = this.padding : delete styles.padding; 
    (this.filter) ? styles.filter = this.filter : delete styles.filter;

    return styles;
  }


  
  render() {//${this.getSvgMedia()
    return (
      <a href={this.url} onClick={this.fnClick.bind(this)} style={this.getStyles()} target={this.target}>
        <img src={this.urlImage} width={this.width} height={this.height}/>
      </a>
    );
  }

}
