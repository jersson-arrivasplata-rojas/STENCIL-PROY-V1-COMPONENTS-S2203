import { Component, Element, h, Prop } from '@stencil/core';
import { filterInvert, listStyle, opacity } from '../../../../functions/class.function';

@Component({
  tag: 'sami-list',
  styleUrl: 'list.scss'
})
export class List {
  @Element() host: HTMLDivElement;
  children: Element[];
  class: string[] = [];

  @Prop() type?: string = 'unorder';

  @Prop() listStyle?: string = 'none';

  @Prop() opacity?: string = '0';

  @Prop() filterInvert?: string = '0';

  constructor() {
  }

  componentWillLoad(){
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';
    
  }
  private getClass(): string {

    this.class.push(listStyle(this.listStyle));
    this.class.push(opacity(this.opacity));
    this.class.push(filterInvert(this.filterInvert));
    return this.class.join(' ');
  }

  render() {
    const List = (this.type === 'unorder' ? 'ul' : 'ol')
    return (
      <List class={`sami-list ${this.getClass()}`}>
        <slot />
      </List>
    );
  }

}