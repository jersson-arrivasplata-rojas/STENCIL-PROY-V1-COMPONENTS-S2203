import { Component, Element, h, Listen, Method, State } from '@stencil/core';
import { Devices } from '@jersson-arrivasplata-rojas/sami-utils/core/build';

@Component({
  tag: 'sami-sidebar-dashboard',
  styleUrl: 'sidebar-dashboard.scss'
})
export class SidebarDashboard {
  @Element() host: HTMLDivElement;

  class: string[] = [];
  children: Element[];

  @State() isMenuOpen: boolean = false;
  @State() isMobile: boolean = false;


  @Listen('resize', { target: 'window' })
  handleScroll(e: Event) {
    //const array = Array.from(e.srcElement['path']);
    const target = e.target as Window;
    this.validateMenu(target);//target
  }


  constructor() {
  }

  componentWillLoad() {
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';

    this.children = Array.from(this.host.children);

    (this.children).forEach(x => {
      const part = Array.from(x['part']);
      if (part && part[0] == 'menu') x.slot = 'menu';
      if (part && part[0] == 'body') x.slot = 'body';
      if (part && part[0] == 'footer') x.slot = 'footer';

      if (x.slot == 'menu') {
        x.classList.add('sami-sidebar-dashboard___menu')
      } else if (x.slot == 'body') {
        x.classList.add('sami-sidebar-dashboard___body')
      } else if (x.slot == 'footer') {
        x.classList.add('sami-sidebar-dashboard___footer')
      }
    });
  }

  componentDidLoad() {
    this.validateMenu(window);//window

  }
  componentWillRender() {
  }

  private validateMenu(target: Window) {//target: Window
    //this.isMenuOpen = !this.isMenuOpen;
    this.isMobile = Boolean((target['innerWidth'] < 770) ? new Devices().isMobile() : false);
    //this.isMenuOpen = Boolean(target['innerWidth'] < 770);
    this.isMenuOpen = true;
  }

  @Method()
  async show() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMobile = Boolean(new Devices().isMobile());
  }

  getClass(): string {
    this.class = [];
    if (this.isMenuOpen) {
      this.class.push('sami-sidebar-dashboard___active')
    }
    if (this.isMobile) {
      this.class.push('sami-sidebar-dashboard___mobile')
    }
    if (!this.isMobile) {
      this.class.push('sami-sidebar-dashboard___desktop')
    }
    return this.class.join(' ');
  }
  render() {
    return (
      <div class={`sami-sidebar-dashboard ${this.getClass()}`}>
        <nav class='sami-sidebar-dashboard___nav'>
          <slot name="menu" ></slot>
          <slot name="body" ></slot>
          <slot name="footer" ></slot>
          <div class="sami-sidebar-dashboard___border"></div>
        </nav>
      </div>
    );
  }

}
