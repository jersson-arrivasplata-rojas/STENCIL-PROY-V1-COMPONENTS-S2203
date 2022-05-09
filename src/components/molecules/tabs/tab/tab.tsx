import { Component, h, Prop, State, Watch } from '@stencil/core';
import { IListGroup } from '../../lists/interfaces/list-group.interface';

@Component({
  tag: 'sami-tab',
  styleUrl: 'tab.scss'
})
export class Tab {
  @State() selectedIndex: number = 0;

  @Prop({ mutable: true }) listGroupData: string | Array<IListGroup>;


  @Watch('listGroupData')
  parseListGroupData(newValue) {
    if (newValue && Array.isArray(newValue)) {
      this.listGroupData = newValue;
    } else if (newValue && typeof newValue === "string") {
      this.listGroupData = JSON.parse(newValue);
    }
  }

  private getListGroup(): Array<IListGroup> {
    if (Array.isArray(this.listGroupData)) {
      return this.listGroupData;
    }
    return JSON.parse(this.listGroupData, function (key, value) {
      // if topmost value, return it,
      if (key === "fnClick" && typeof value == "string") return eval("(" + value + ")';");

      return value;
      //return { key: value };              // else return v * 2.
    });
  }

  render() {
    //<sami-hyperlink identify={x.identify} text={x.text} url={x.url} target={x.target} fnClick={() => { this.fnClick(x, pos) }}></sami-hyperlink>
    return (
      <div class='sami-tab'>

        {
          (this.getListGroup()) ?
            <ul class={{ 'sami-tab___header': true }}>
              {
                //this.getListGroup().map((x, pos) => (<li class={{ 'sami-tab___active': (this.selectedIndex === pos) }}></li>))
              }
            </ul> :
            []

        }
        {
          this.getListGroup() ?
            (<div >
              <slot name={`sami-tab___search`}></slot>
            </div>) :
            []
        }
        {
          this.getListGroup() ?
            this.getListGroup().map((x, pos) => {
              return (<div id={x.identify} class={{ 'sami-tab___body': true, 'sami-tab___active': (this.selectedIndex === pos) }}>
                <slot name={`sami-tab___${x.identify}`}></slot>
              </div>);
            }) :
            []
        }
      </div>
    );
  }

}
