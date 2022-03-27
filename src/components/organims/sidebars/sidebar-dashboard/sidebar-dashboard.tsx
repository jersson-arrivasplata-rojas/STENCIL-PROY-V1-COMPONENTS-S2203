import { Component, h, Prop, Watch } from '@stencil/core';
import { hyperLinkInterface } from '../interfaces/hyperlink.interface';




@Component({
  tag: 'sami-sidebar-dashboard',
  styleUrl: 'sidebar-dashboard.scss'
})
export class SidebarDashboard {

  @Prop({ mutable: true }) data: 
  Array<hyperLinkInterface | 
  { 
    title: string; 
    data: Array<hyperLinkInterface>;
  }
  > = [];


  constructor() {
  }


  @Watch('data')
  parseDataProp(newValue) {
    if (newValue) this.data = newValue;

  }


  private instanceOfHyperLinkInterface(object: any): object is hyperLinkInterface {
    return 'url' in object;
  }

  private liOfHyperLink(x: hyperLinkInterface) {
    return (<li>
      <sami-hyperlink text={x.text} url={x.url} target={x.target} fnClick={x.fnClick} padding={x.padding}></sami-hyperlink>
    </li>);
  }

  private liOfTitle(x: { title: string; data: Array<hyperLinkInterface>; }) {
    return (<li>
      <div><span>{x.title}</span></div>
      {
        x.data ? this.listOfArrayData(x.data) : []
      }
    </li>)
  }

  private listOfArrayData(data: Array<hyperLinkInterface | { title: string; data: Array<hyperLinkInterface>; }>) {
    data.map((x) => {
      if (this.instanceOfHyperLinkInterface(x)) this.liOfHyperLink(x);
      else this.liOfTitle(x);
    })
  }
  

  render() {
    return (
      <ul class="sami-sidebar-dashboard___ul">
        
      </ul>
    );
  }

}
/**
 * 
 * {
          this.data ? this.listOfArrayData(this.data) : []
        }
 */