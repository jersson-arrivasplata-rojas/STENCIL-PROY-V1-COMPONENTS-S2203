import { Component, Element, h, Prop } from '@stencil/core';// Event, 
import { backgroundColor, borderStyle, borderWidth, position, textColor, textDecoration } from '../../../../functions/class.function';


@Component({
  tag: 'sami-hyperlink',
  styleUrl: 'hyperlink.scss'
})
export class Hyperlink {
  @Element() host: HTMLAnchorElement;

  @Prop() color?: string = '';

  @Prop() position?: string = 'relative';

  @Prop() borderStyle?: string = '';

  @Prop() borderWidth?: string = '';

  @Prop() decoration?: string = '';

  @Prop() background?: string = '';

  @Prop() hyperlinkType?: string = '';

  @Prop() onlyDesktop?: boolean = false;
  //@Event() ctrlClick?: () => void = () => { };
  //ctrlClick?: () => void = () => { };

  class: string[] = [];

  ctrlClick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null = () => { };

  constructor() {
  }


  componentWillLoad(){
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';
    if(this.ctrlClick.length>0){

      this.ctrlClick = this.host.onclick;
    }
  }


  private getClass(): string {

    if(this.hyperlinkType =='back'){
      this.class.push('sami-hyperlink-back');
    }else if(this.hyperlinkType =='outline-danger'){
      this.class.push('sami-hyperlink-outline-danger');
    }else if(this.onlyDesktop == true){
      this.class.push('sami-hyperlink-only-desktop');
    }

    this.class.push(position(this.position));
    this.class.push(borderStyle(this.borderStyle));
    this.class.push(borderWidth(this.borderWidth));
    this.class.push(textColor(this.color));
    this.class.push(textDecoration(this.decoration));
    this.class.push(backgroundColor(this.background));
    return this.class.join(' ');
  }

  private getAttributes() {
    const data = Object.assign({});
    const attributes: Attr[] = Array.from(this.host.attributes);
    const href = (attributes.filter(element => (element.name) === 'href'));
    const target = (attributes.filter(element => (element.name) === 'target'));
    const id = (attributes.filter(element => (element.name) === 'id'));

    (id.length) ? data.id = id[0]['value'] : delete data.id;
    (href.length) ? data.href = href[0]['value'] : delete data.href;
    (target.length) ? data.target = target[0]['value'] : delete data.target;

    return data;
  }

  render() {
    return (
      <a class={`sami-hyperlink ${this.getClass()}`} onClick={this.ctrlClick.bind(this)} {...this.getAttributes()} >
        <div class='sami-hyperlink___block'></div>
        <slot />
      </a>
    );
  }

}
