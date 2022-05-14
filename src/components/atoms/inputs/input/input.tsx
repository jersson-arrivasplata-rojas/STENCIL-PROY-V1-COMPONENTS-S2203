import { Component, Element, h, Prop } from '@stencil/core';
import { textAlign } from '../../../../functions/class.function';

@Component({
  tag: 'sami-input',
  styleUrl: 'input.scss'
})
export class Input {
  @Element() host: HTMLInputElement;
  @Prop() align?: string = '';
  @Prop() type?: string = '';
  @Prop() inputType?: string = '';

  children: Element[];
  class: string[] = [];
  name: string;
  placeholder: string;
  value: string;
  constructor() {
   
  }
  
  componentWillLoad(){
    (Array.from(this.host.attributes)).forEach(x => {
      if (x && x['name'] === 'class'){
        this.class = (x['value']).split(' ');
        this.host.className = '';
      }
      if (x && x['name'] === 'name') this.name = x['value'];
      if (x && x['name'] === 'type') this.type = x['value'];
      if (x && x['name'] === 'placeholder') this.placeholder = x['value'];
      if (x && x['name'] === 'value') this.value = x['value'];
    });
  }

  private getClass(): string {
    if(this.inputType =='inline'){
      this.class.push('sami-input-inline');
    }else if(this.inputType =='subscribe'){
        this.class.push('sami-input-subscribe');
    
    }

    this.class.push(textAlign(this.align));
    return this.class.join(' ');
  }
  render() {
    return (
      <input
        class={`sami-input ${this.getClass()}`}
        type={this.type}
        name={this.name}
        placeholder={this.placeholder}
        value={this.value} />
    );
  }
}
