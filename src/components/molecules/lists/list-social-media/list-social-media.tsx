import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'sami-list-social-media',
  styleUrl: 'list-social-media.scss'
})
export class ListSocialMedia {

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
    type: string;
    padding: string;
    target: string;
    urlImage: string;
    fnClick?: () => void;
  }> = [];

  @Watch('data')
  parseDataProp(newValue) {
    if (newValue) this.data = newValue;

  }

  @Prop() flexDirection?: string;

  @Prop() filter?: string;

  @Prop() classAppend: string = '';


  /* @Method() setData(data) {
     this.data = data;
   }*/


  /**
   * es: Retorna un json de estilos
   * en: Return a json of styles
   */
  private getStyles() {
    const styles = Object.assign({});
    (this.flexDirection) ? styles.flexDirection = this.flexDirection : delete styles.flexDirection;
    (this.filter) ? styles.filter = this.filter : delete styles.filter;
    return styles;
  }


  private getUlClass() {
    return `sami-list-social-media ${this.classAppend}`;
  }



  render() {
    return (
      <ul class={this.getUlClass()} style={this.getStyles()}>
        {
          this.data ?
            this.data.map(x => {
              return (<li>
                <sami-hyperlink-icon onClick={x.fnClick} url={x.url} type={x.type} padding={x.padding} target={x.target} url-image={x.urlImage}></sami-hyperlink-icon>
              </li>);
            }) :
            []
        }
      </ul>
    );
  }

}
