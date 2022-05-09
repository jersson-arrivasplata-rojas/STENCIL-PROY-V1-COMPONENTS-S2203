import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';
import { IHyperLink } from '../interfaces/hyperlink.interface';




@Component({
  tag: 'sami-sidebar-dashboard',
  styleUrl: 'sidebar-dashboard.scss'
})
export class SidebarDashboard {

  

  @Prop() menuLeft?: string;
  
  @State() isMenuOpen: boolean = true;

  @Prop() hyperlinkUrl?: string;

  @Prop() hyperlinkPadding?: string;

  @Prop() hyperlinkFilter?: string;

  @Prop() hyperlinkUrlImage?: string;


  @Prop({ mutable: true }) data:
    Array<IHyperLink |
    {
      title: string;
      data: Array<IHyperLink>;
    }
    > = [];

  private arrayHyperLink: Array<IHyperLink> = [];



  constructor() {
    this.validateMenu();
  }


  @Watch('data')
  parseDataProp(newValue) {
    if (newValue) this.data = newValue;

  }


  private instanceOfIHyperLink(object: any): object is IHyperLink {
    return 'url' in object;
  }

  private listOfHyperLink(x: IHyperLink) {
    //<sami-hyperlink text={x.text} url={x.url} target={x.target} fnClick={x.fnClick}></sami-hyperlink>
    return (<li class={{ 'sami-sidebar-dashboard___li': true, 'sami-sidebar-dashboard___active': x.active }}>
      
    </li>);
  }

  private ArrayOfListOfHyperlink(data: Array<IHyperLink>) {
    const array = [];
    data.map((response) => {
      array.push(this.listOfHyperLink(response))
    });
    return array;
  }

  private listWithTitle(x: { title: string; data: Array<IHyperLink>; }) {

    return (<li class={`sami-sidebar-dashboard___li sami-sidebar-dashboard___section`}>
      <div class='sami-sidebar-dashboard___title'><span>{x.title}</span></div>
      <ul class="sami-sidebar-dashboard___ul">
        {
          this.ArrayOfListOfHyperlink(x.data)
        }
      </ul>
    </li>)
  }

  private listOfArrayData(data: Array<IHyperLink | { title: string; data: Array<IHyperLink>; }>) {
    data.map((x, index) => {
      if (this.instanceOfIHyperLink(x)) {
        (this.arrayHyperLink[index]) ? 
        this.arrayHyperLink[index] = this.listOfHyperLink({ ...x }) : 
        this.arrayHyperLink.push(this.listOfHyperLink({ ...x }));

      }
      else{ 
        (this.arrayHyperLink[index]) ? 
        this.arrayHyperLink[index] = this.listWithTitle({ ...x }) : 
        this.arrayHyperLink.push(this.listWithTitle({ ...x }));
      }
    })
    return this.arrayHyperLink;
  }

  @Listen('resize', { target: 'window' })
  handleScroll() {//e: Event
    //const target = e.target as Window;
    this.validateMenu();//target
  }
  private validateMenu() {//target: Window
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
      this.isMenuOpen = true;
    }
  }
  private getMenuStyles() {
    const styles = Object.assign({});
    (this.menuLeft) ? styles.left = this.menuLeft : delete styles.left;

    return styles;
  }
  render() {
    // <sami-hyperlink-icon url={this.hyperlinkUrl} target="" type="menu" padding={this.hyperlinkPadding} filter={this.hyperlinkFilter} onClick={() => this.menu()} url-image={this.hyperlinkUrlImage}></sami-hyperlink-icon>
  
    return (
      <div class={{ 'sami-sidebar-dashboard': true, 'sami-sidebar-dashboard___active': this.isMenuOpen }} >
        <div class='sami-sidebar-dashboard___hyperlink-menu' style={this.getMenuStyles()}>
               </div>
        <div class="sami-sidebar-dashboard___body">
          <ul class="sami-sidebar-dashboard___ul sami-sidebar-dashboard___main">
            {
              this.data ? this.listOfArrayData([...this.data]) : []
            }
          </ul>
          <div class="sami-sidebar-dashboard___border"></div>
        </div>
      </div>
    );
  }

}
/**
 *
 *
 */
