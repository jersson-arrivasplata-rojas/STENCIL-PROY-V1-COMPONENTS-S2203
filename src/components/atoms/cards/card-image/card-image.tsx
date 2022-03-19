import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-card-image',
  styleUrl: 'card-image.scss'
})
export class CardImage {


  @Prop() cardTag?: HTMLElement;

  /**
   * es: Ruta que redirige del card image
   * en: Route of redirect card image
   * Example: localhost/css3
   */
  @Prop() url: string = '#';

  /**
   * es: Título del card image
   * en: Title of card image
   * Example: Estilos
   */
  @Prop() cardTitle: string = '';

  /**
   * es: Sub título del card image
   * en: Subtitle of card image
   * Example: Css3
   */
  @Prop() cardSubtitle: string = '';

  /**
   * es: Sub título del card image
   * en: Subtitle of card image
   * Example: Css3
   */
  @Prop() backgroundImage: string = '';

  /**
   * es: Texto del Tag
   * en: Text of Tag
   * Example: #fff
   
  @Prop() text?: string = '';*/

  /**
   * es: Retorna un json de estilos
   * en: Return a json of styles
   */
  private getStyles() {
    const styles = Object.assign({});
    (this.backgroundImage) ? styles.backgroundImage = `url(${this.backgroundImage})` : delete styles.backgroundImage;

    return styles;
  }

  render() {
    //{this.cardTag ? <sami-card-tag text={this.text}></sami-card-tag>: (this.cardTag as HTMLElement)}
    return (
      <a class="sami-card-image" href={this.url}>
        <slot name="tags" ></slot>
        <div class="sami-card-image___background" style={this.getStyles()}>
        </div>
        <div class="sami-card-image___content">
          <p class="sami-card-image___subtitle">{this.cardSubtitle}</p>
          <p class="sami-card-image___title">{this.cardTitle}</p>
        </div>
      </a>
    );
  }

}
