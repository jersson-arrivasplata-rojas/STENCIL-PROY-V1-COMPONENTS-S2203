import { Component, h, Prop, Watch } from '@stencil/core';
import { IListGroup } from '../interfaces/list-group.interface';

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
  @Prop({ mutable: true }) data: Array<IListGroup>;

  @Watch('data')
  parseDataProp(newValue) {
    if (newValue) this.data = newValue;

  }

  @Prop() display?: string;
  @Prop() border?: boolean=false;
  @Prop() flexDirection?: string;

  @Prop() width?: string;


  @Prop() classAppend: string = '';

  /**
   * es: Retorna un json de estilos
   * en: Return a json of styles
   */
  private getStyles() {
    const styles = Object.assign({});
    (this.display) ? styles.display = this.display : delete styles.display;
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
                {
                  this.border ? <div class='sami-list-group___border'></div>:[]
                }
                <sami-hyperlink text={x.text} url={x.url} target={x.target} fnClick={x.fnClick} padding={x.padding}></sami-hyperlink>
              </li>);
            }) :
            []
        }
      </ul>
    );
  }

}
