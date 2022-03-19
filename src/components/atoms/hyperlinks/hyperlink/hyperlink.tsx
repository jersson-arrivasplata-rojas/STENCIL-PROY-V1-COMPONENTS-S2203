import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-hyperlink',
  styleUrl: 'hyperlink.scss'
})
export class Hyperlink {

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

  @Prop() target: string = "_self";


  @Prop() fnClick?: () => void = () => { };
  /**
   * es: Retorna un json de estilos
   * en: Return a json of styles
   */
  private getStyles() {
    const styles = Object.assign({});
    (this.padding) ? styles.padding = this.padding : delete styles.padding;

    return styles;
  }

  render() {
    return (
      <a href={this.url} onClick={this.fnClick.bind(this)} style={this.getStyles()} target={this.target}>
        {this.text}
      </a>
    );
  }

}
