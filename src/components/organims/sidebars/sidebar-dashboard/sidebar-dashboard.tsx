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
    this.validateMenu();//window
  }


  @Watch('data')
  parseDataProp(newValue) {
    if (newValue) this.data = newValue;

  }


  private instanceOfIHyperLink(object: any): object is IHyperLink {
    return 'url' in object;
  }

  private listOfHyperLink(x: IHyperLink, pos: number) {
    return (<li class={{ 'sami-sidebar-dashboard___li': true, 'sami-sidebar-dashboard___active': x.active }}>
      <sami-hyperlink text={x.text} url={x.url} target={x.target} fnClick={x.fnClick} padding={x.padding}></sami-hyperlink>
    </li>);
  }

  private ArrayOfListOfHyperlink(data: Array<IHyperLink>, pos: number) {
    const array = [];
    data.map((response, index) => {
      //this.arrayHyperLink.push(this.listOfHyperLink(response))
      array.push(this.listOfHyperLink(response, index))
      //data[pos] = this.listOfHyperLink(response,index);
    });
    return array;
  }

  private listWithTitle(x: { title: string; data: Array<IHyperLink>; }, pos: number) {

    return (<li class={`sami-sidebar-dashboard___li sami-sidebar-dashboard___section`}>
      <div class='sami-sidebar-dashboard___title'><span>{x.title}</span></div>
      <ul class="sami-sidebar-dashboard___ul">
        {
          this.ArrayOfListOfHyperlink(x.data, pos)
        }
      </ul>
    </li>)
  }

  private listOfArrayData(data: Array<IHyperLink | { title: string; data: Array<IHyperLink>; }>) {
    data.map((x, index) => {
      if (this.instanceOfIHyperLink(x)) {
        (this.arrayHyperLink[index]) ? 
        this.arrayHyperLink[index] = this.listOfHyperLink({ ...x }, index) : 
        this.arrayHyperLink.push(this.listOfHyperLink({ ...x }, index));

      }
      else{ 
        (this.arrayHyperLink[index]) ? 
        this.arrayHyperLink[index] = this.listWithTitle({ ...x }, index) : 
        this.arrayHyperLink.push(this.listWithTitle({ ...x }, index));
      }
    })
    return this.arrayHyperLink;
  }

  @Listen('resize', { target: 'window' })
  handleScroll() {//e: Event
    //const target = e.target as Window;
    this.validateMenu();//target
  }

  private menu() {
    this.isMenuOpen = !this.isMenuOpen;
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
    return (
      <div class={{ 'sami-sidebar-dashboard': true, 'sami-sidebar-dashboard___active': this.isMenuOpen }} >
        <div class='sami-sidebar-dashboard___hyperlink-menu' style={this.getMenuStyles()}>
          <sami-hyperlink-icon url={this.hyperlinkUrl} target="" type="menu" padding={this.hyperlinkPadding} filter={this.hyperlinkFilter} onClick={() => this.menu()} url-image={this.hyperlinkUrlImage}></sami-hyperlink-icon>
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
