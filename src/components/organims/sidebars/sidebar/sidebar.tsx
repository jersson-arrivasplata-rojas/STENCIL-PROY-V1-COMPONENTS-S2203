import { Component, h, State, Listen, Element, Method } from '@stencil/core';

@Component({
  tag: 'sami-sidebar',
  styleUrl: 'sidebar.scss'
})
export class Sidebar {
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
    this.class = (this.host.className).split(' ');
    this.host.className = '';

    this.children = Array.from(this.host.children);

    (this.children).forEach(x => {
      const part = Array.from(x['part']);
      if (part && part[0] == 'menu') x.slot = 'menu';
      if (part && part[0] == 'header') x.slot = 'header';
      if (part && part[0] == 'body') x.slot = 'body';
      if (part && part[0] == 'footer') x.slot = 'footer';

      if (x.slot == 'menu') {
        x.classList.add('sami-sidebar___menu')
      } else if (x.slot == 'header') {
        x.classList.add('sami-sidebar___header')
      } else if (x.slot == 'body') {
        x.classList.add('sami-sidebar___body')
      } else if (x.slot == 'footer') {
        x.classList.add('sami-sidebar___footer')
      }
    });
  }
  componentDidLoad() {
    this.validateMenu(window);//window

  }
  componentWillRender() {
  }

  private validateMenu(target: Window) {//target: Window

    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {

      this.isMenuOpen = !this.isMenuOpen;
      if (target['innerWidth'] < 770) {
        this.isMobile = true;
      }else{
        this.isMenuOpen = true;
        this.isMobile = false;
      }
      //this.isMenuOpen = (!(!isNaN(target['innerWidth']) && target['innerWidth'] < 770));
      //this.isMobile = false;
    } else {
      this.isMenuOpen = !this.isMenuOpen;
      this.isMobile = true;
    }
  }

  @Method()
  async show() {
    this.validateMenu(window)
  }

  getClass(): string {
    this.class = [];
    if (this.isMenuOpen) {
      this.class.push('sami-sidebar___active')
    }
    if (this.isMobile) {
      this.class.push('sami-sidebar___mobile')
    }
    return this.class.join(' ');
  }
  render() {
    return (
      <div class={`sami-sidebar ${this.getClass()}`}>

        <nav class='sami-sidebar___nav'>
          <slot name="menu" ></slot>
          <slot name="header" ></slot>
          <slot name="body" ></slot>
          <slot name="footer" ></slot>
        </nav>
      </div>
    );
  }

}
