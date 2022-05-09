import { Component, h, Prop, Watch } from '@stencil/core';
import { IListGroup } from '../../lists/interfaces/list-group.interface';

@Component({
  tag: 'sami-dropdown',
  styleUrl: 'dropdown.scss'
})
export class Dropdown {
  @Prop() border?: boolean = false;

  @Prop() text: string = "";
  @Prop() width: string = "";
  @Prop() right: string = "";
  @Prop({ mutable: true }) data: string | Array<IListGroup>;
  @Watch('data')
  parseListGroupData(newValue) {
    if (newValue && Array.isArray(newValue)) {
      this.data = newValue;
    } else if (newValue && typeof newValue === "string") {
      this.data = JSON.parse(newValue);
    }
  }

  private getListGroup(): Array<IListGroup> {
    if (Array.isArray(this.data)) {
      return this.data;
    }
    return JSON.parse(this.data);
  }
  private getContentStyles() {
    const styles = Object.assign({});
    (this.right) ? styles.right = this.right : delete styles.right;
    return styles;
  }
  /*private getAttrHyperLink() {
    const styles = Object.assign({});
    (this.width) ? styles.width = this.width : delete styles.width;

    return styles;
  }*/
  render() {
    //{this.cardTag ? <sami-card-tag text={this.text}></sami-card-tag>: (this.cardTag as HTMLElement)}
    // display="grid" 
    //width={this.width} 

    // <sami-hyperlink class="sami-dropdown___header" text={this.text} url="javascript:void(0)" target="_self"></sami-hyperlink>
    return (

      <div class={'sami-dropdown'}>
        {
          this.border ? <div class='sami-dropdown___border'></div> : []
        }
       
        {
          (this.data) ? (
            <div class="sami-dropdown___content" style={this.getContentStyles()}>
              <sami-list-group data={this.getListGroup()}></sami-list-group>
            </div>
          ) : []
        }
      </div>
    );
  }

}
