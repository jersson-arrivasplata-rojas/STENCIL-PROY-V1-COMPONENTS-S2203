import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'sami-tab',
  styleUrl: 'tab.scss'
})
export class Tab {
  @State() selectedIndex: number = 0;


  render() {
    return (
      <div class='sami-tab'>
        <div>
          <slot name={`sami-tab___header`}></slot>
        </div>
        <div>
          <slot name={`sami-tab___search`}></slot>
        </div>
        <div>
          <slot name={`sami-tab___body`}></slot>
        </div>
      </div>
    );
  }

}
/**
 {
          this.getListGroup() ?
            this.getListGroup().map((x, pos) => {
              return (<div id={x.identify} class={{ 'sami-tab___body': true, 'sami-tab___active': (this.selectedIndex === pos) }}>
                <slot name={`sami-tab___${x.identify}`}></slot>
              </div>);
            }) :
            []
        }
 * 
 */