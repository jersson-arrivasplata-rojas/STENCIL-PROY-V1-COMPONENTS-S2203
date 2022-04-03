import { Component, h, Prop, Watch } from '@stencil/core';
import { IHyperLink } from '../interfaces/hyperlink.interface';




@Component({
  tag: 'sami-sidebar-dashboard',
  styleUrl: 'sidebar-dashboard.scss'
})
export class SidebarDashboard {

  @Prop({ mutable: true }) data:
    Array<IHyperLink |
    {
      title: string;
      data: Array<IHyperLink>;
    }
    >;


  constructor() {
  }


  @Watch('data')
  parseDataProp(newValue) {
    if (newValue) this.data = newValue;

  }


  private instanceOfIHyperLink(object: any): object is IHyperLink {
    return 'url' in object;
  }

  private listOfHyperLink(x: IHyperLink) {
    return (<li class={{ 'sami-sidebar-dashboard___li': true, 'sami-sidebar-dashboard___active': x.active }}>
      <sami-hyperlink text={x.text} url={x.url} target={x.target} fnClick={x.fnClick} padding={x.padding}></sami-hyperlink>
    </li>);
  }

  private ArrayOfListOfHyperlink(data: Array<IHyperLink>) {
    data.map((response, index) => {
      data[index] = this.listOfHyperLink(response);
    });
    return data;
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
      if (this.instanceOfIHyperLink(x)) data[index] = this.listOfHyperLink(x);
      else data[index] = this.listWithTitle(x);
    })
    return data;
  }


  render() {
    return (
      <div>
        <div class="sami-sidebar-dashboard___border"></div>
        <ul class="sami-sidebar-dashboard___ul sami-sidebar-dashboard___main">
          {
            this.data ? this.listOfArrayData(this.data) : []
          }
        </ul>
      </div>
    );
  }

}
/**
 *
 *
 */
