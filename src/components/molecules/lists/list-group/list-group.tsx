import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'sami-list-group',
  styleUrl: 'list-group.scss'
})
export class ListGroup {

  /*@Element() el!: HTMLStencilElement;*/

  /** @State() data: Array<{
   url: string;
   type: string;
 }> = [];

  * es: Ruta que redirige del card image
  * en: Route of redirect card image
  * Example: localhost/css3
  */
  /**/
  @Prop({ mutable: true }) data: Array<{
    url: string;
    text: string;
    padding: string;
    target: string;
    fnClick?: () => void;
  }> = [];

  @Watch('data')
  parseDataProp(newValue) {
    if (newValue) this.data = newValue;

  }

  @Prop() flexDirection?: string;

  @Prop() width?: string;


  @Prop() classAppend: string = '';

  /**
   * es: Retorna un json de estilos
   * en: Return a json of styles
   */
  private getStyles() {
    const styles = Object.assign({});
    (this.flexDirection) ? styles.flexDirection = this.flexDirection : delete styles.flexDirection;
    (this.width) ? styles.width = this.width : delete styles.width;
    return styles;
  }

  private getUlClass() {
    return `sami-list-group ${this.classAppend}`;
  }

  render() {
    return (
      <ul class={this.getUlClass()} style={this.getStyles()}>
        {
          this.data ?
            this.data.map(x => {
              return (<li>
                <sami-hyperlink text={x.text} url={x.url} target={x.target} fnClick={x.fnClick} padding={x.padding}></sami-hyperlink>
              </li>);
            }) :
            []
        }
      </ul>
    );
  }

}
