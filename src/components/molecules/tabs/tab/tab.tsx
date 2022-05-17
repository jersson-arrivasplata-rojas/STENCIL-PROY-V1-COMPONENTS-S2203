import { Component, Element, h, State } from '@stencil/core';

@Component({
  tag: 'sami-tab',
  styleUrl: 'tab.scss'
})
export class Tab {
  @Element() host: HTMLFormElement;
  @State() selectedIndex: number = 0;
  children: Element[];
  header: Element[];
  body: Element[];

  class: string[] = [];
  constructor() {
  }
  componentWillLoad() {
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';

    this.children = Array.from(this.host.children);

    (this.children).forEach(x => {
      const part = Array.from(x['part']);
      if (part && part[0] == 'header') {
        x.slot = 'header';
        this.header = Array.from(x.children);
        this.updateHeader();
      }
      if (part && part[0] == 'body') {
        x.slot = 'body';
        this.body = Array.from(x.children);
        this.updateBody();
      }
      if (part && part[0] == 'search') x.slot = 'search';

      if (x.slot == 'header') {
        x.classList.add('sami-tab___header');
      } else if (x.slot == 'body') {
        x.classList.add('sami-tab___body');
      } else if (x.slot == 'search') {
        x.classList.add('sami-tab___search');
      }
    });
  }

  updateHeader() {
    (this.header).forEach((x, pos) => {
      if (pos === 0) {
        x.classList.add('sami-tab___active');
      }
      x.addEventListener('click', () => this.show(pos));
    });
  }
  updateBody() {
    (this.body).forEach((x, pos) => {
      if (pos === 0) {
        x.classList.add('sami-tab___active');
      }
    });
  }

  private getClass(): string {
    return this.class.join(' ');
  }

  show(position: number) {
    (this.header).forEach((x, pos) => {
      x.firstElementChild.classList.remove('sami-tab___active');
      if (pos === position) {
        x.firstElementChild.classList.add('sami-tab___active');
      }
    });
    (this.body).forEach((x, pos) => {
      x.classList.remove('sami-tab___active');
      if (pos === position) {
        x.classList.add('sami-tab___active');
      }
    });
  }


  render() {
    return (
      <div class={`sami-tab ${this.getClass()}`}>
        <div>
          <slot name={`header`}></slot>
        </div>
        <div>
          <slot name={`search`}></slot>
        </div>
        <div>
          <slot name={`body`}></slot>
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