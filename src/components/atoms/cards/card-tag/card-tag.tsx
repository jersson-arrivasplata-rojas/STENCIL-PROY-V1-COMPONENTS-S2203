import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-card-tag',
  styleUrl: 'card-tag.scss'
})
export class CardTag {

  /**
   * es: Texto del Tag
   * en: Text of Tag
   * Example: #fff
   */
  @Prop() text?: string = '';

  /**
   * es: Color del Tag
   * en: Color of Tag
   * Example: 1
   */
  @Prop() color?: string;
  /**
   * es: Fondo del Tag
   * en: Background of Tag
   * Example: #000
   */
  @Prop() background?: string;
  /**
   * es: Posición del Tag
   * en: Position of Tag
   * Example: #fff
   */
  @Prop() position?: string;
  /**
   * es: Ancho del Tag
   * en: Width of Tag
   * Example: absolute
   */
  @Prop() width?: string;
  /**
   * es: Alto del Tag
   * en: Height of Tag
   * Example: 40px
   */
  @Prop() height?: string;
  /**
   * es: z-index del Tag
   * en: z-index of Tag
   * Example: 25px
   */
  @Prop() zIndex?: number;
  /**
   * es: Alineamiento de texto del Tag
   * en: Text Align of Tag
   * Example: 2
   */
  @Prop() textAlign?: string;
  /**
   * es: Alto de la linea de texto del Tag
   * en: Line Height of Tag
   * Example: center
   */
  @Prop() lineHeight?: number;
  /**
   * es: Estilo de Pso del texto del Tag
   * en: Font Weigth about text of Tag
   * Example: #fff
   */
  @Prop() fontWeight?: string;
  /**
   * es: Posición de Abajo del Tag
   * en: Position Bottom of Tag
   * Example: bolder
   */
  @Prop() bottom?: number;

  /**
 * es: Posición de Abajo del Tag
 * en: Position Bottom of Tag
 * Example: bolder
 */
  @Prop() top?: number;


  /**
   * es: Posición Derecha del Tag
   * en: Position Right of Tag
   * Example: 0px
   */
  @Prop() right?: number;
  /**
   * es: Posición Izquierda del Tag
   * en: Position Left of Tag
   * Example: 0px
   */
  @Prop() left?: string = 'initial';
  /**
   * es: Radio del borde del Tag
   * en: Border Radius of Tag
   * Example: none
   */
  @Prop() borderRadius?: string;
  /**
   * es: Transición del Tag
   * en: Transition of Tag
   * Example: filter 200ms linear, transform 200ms linear
   */
  @Prop() transition?: string;
  /**
   * es: Transición del Tag
   * en: Transition of Tag
   * Example: filter 200ms linear, transform 200ms linear
   */
  @Prop() class?: string='';

  /**
   * es: Retorna un json de estilos
   * en: Return a json of styles
   */
  private getStyles() {
    const styles = Object.assign({});
    (this.text) ? styles.text = this.text : delete styles.text;
    (this.color) ? styles.color = this.color : delete styles.color;
    (this.background) ? styles.background = this.background : delete styles.background;
    (this.position) ? styles.position = this.position : delete styles.position;
    (this.top) ? styles.top = this.top : delete styles.top;
    (this.bottom) ? styles.bottom = this.bottom : delete styles.bottom;
    (this.width) ? styles.width = this.width : delete styles.width;
    (this.height) ? styles.height = this.height : delete styles.height;
    (this.zIndex) ? styles.zIndex = this.zIndex : delete styles.zIndex;
    (this.textAlign) ? styles.textAlign = this.textAlign : delete styles.textAlign;
    (this.lineHeight) ? styles.lineHeight = this.lineHeight : delete styles.lineHeight;
    (this.fontWeight) ? styles.fontWeight = this.fontWeight : delete styles.fontWeight;
    (this.right) ? styles.right = this.right : delete styles.right;
    (this.left) ? styles.left = this.left : delete styles.left;
    (this.borderRadius) ? styles.borderRadius = this.borderRadius : delete styles.borderRadius;
    (this.transition) ? styles.transition = this.transition : delete styles.transition;

    return styles;
  }

  render() {
    return (
      <div class={this.class} style={this.getStyles()} >
        {this.text}
      </div>
    );
  }

}
