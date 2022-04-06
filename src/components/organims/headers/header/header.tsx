import { Component, h, Prop, Watch } from '@stencil/core';
import { IListGroup } from '../../../molecules/lists/interfaces/list-group.interface';
import { IListSocialMedia } from '../../../molecules/lists/interfaces/list-social-media.interface';

@Component({
  tag: 'sami-header',
  styleUrl: 'header.scss'
})
export class Header {

  @Prop() zIndex: string;

  @Prop() position: string;

  @Prop() top: string;

  @Prop() backgroundColor: string;

  @Prop() boxShadow: string;

  @Prop() flexGrow: boolean;

  @Prop() justifyContentMobile: string;

  @Prop() justifyContent: string;

  @Prop() desktop: boolean;

  @Prop() hyperlinkBackgroundImage: string;

  @Prop() hyperlinkMaxWidth: string;

  @Prop() hyperlinkBorderRadius: string;

  @Prop() hyperlinkBackground: string;

  @Prop() hyperlinkUrl: string;

  @Prop() hyperlinkTarget: string;

  @Prop() hyperlinkWidth: string;

  @Prop() hyperlinkHeight: string;

  @Prop({ mutable: true }) listGroupData: string | Array<IListGroup>;

  @Prop({ mutable: true }) listSocialMediaData: string | Array<IListSocialMedia>;

  @Prop({ mutable: true }) dropdownListGroupData: string | Array<IListGroup>;

  @Prop() dropdownTitle: string;

  @Prop() dropdownWidth: string;
  @Prop() dropdownRight: string;
  @Prop() dropdownBorder: boolean=false;


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
    return JSON.parse(this.listGroupData);
  }

  @Watch('dropdownListGroupData')
  parseDropDownListGroupData(newValue) {
    if (newValue && Array.isArray(newValue)) {
      this.dropdownListGroupData = newValue;
    } else if (newValue && typeof newValue === "string") {
      this.dropdownListGroupData = JSON.parse(newValue);
    }
  }
  private getDropDownListGroup(): Array<IListGroup> {
    if (Array.isArray(this.dropdownListGroupData)) {
      return this.dropdownListGroupData;
    }
    return JSON.parse(this.dropdownListGroupData);
  }

  @Watch('listSocialMediaData')
  parseListSocialMediaData(newValue) {
    if (newValue && Array.isArray(newValue)) {
      this.listSocialMediaData = newValue;
    } else if (newValue && typeof newValue === "string") {
      this.listSocialMediaData = JSON.parse(newValue);
    }
  }

  private getListSocialMedia(): Array<IListSocialMedia> {
    if (Array.isArray(this.listSocialMediaData)) {
      return this.listSocialMediaData;
    }
    return JSON.parse(this.listSocialMediaData);
  }


  /*private instanceOfIListGroup(object: any): object is IListGroup {
    return ('url' in object);
  }


  private isArrayOfListGroup(value: any): boolean {
    return Array.isArray(value) && value.every(item => this.instanceOfIListGroup(item) === true);
  }*/

  private getStyles() {
    const styles = Object.assign({});
    (this.justifyContent) ? styles.justifyContent = this.justifyContent : delete styles.justifyContent;
    (this.backgroundColor) ? styles.backgroundColor = this.backgroundColor : delete styles.backgroundColor;
    (this.boxShadow) ? styles.boxShadow = this.boxShadow : delete styles.boxShadow;
    (this.position) ? styles.position = this.position : delete styles.position;
    (this.top) ? styles.top = this.top : delete styles.top;
    (this.zIndex) ? styles.zIndex = this.zIndex : delete styles.zIndex;
    return styles;
  }

  private getHyperLinkImageStyles() {
    const styles = Object.assign({});
    (this.flexGrow) ? styles.flexGrow = 1 : delete styles.flexGrow;
    (this.justifyContentMobile) ? styles.justifyContent = this.justifyContentMobile : delete styles.justifyContentMobile;


    return styles;
  }

  render() {
    return (
      <div class={{ 'sami-header': true, 'sami-header___desktop': this.desktop }} style={this.getStyles()}>
        <div style={this.getHyperLinkImageStyles()}>
          <sami-hyperlink-image
            background-image={this.hyperlinkBackgroundImage}
            url={this.hyperlinkUrl}
            max-width={this.hyperlinkMaxWidth}
            width={this.hyperlinkWidth}
            height={this.hyperlinkHeight}
            border-radius={this.hyperlinkBorderRadius}
            background={this.hyperlinkBackground}
            target={this.hyperlinkTarget}
          ></sami-hyperlink-image>
        </div>
        {
          (this.listGroupData)? (
            <div>
              <sami-list-group data={this.getListGroup()} border={true} flex-direction="row" ></sami-list-group>
            </div>
          ):[]
        }
        {
          (this.listSocialMediaData) ? (
            <div>
              <sami-list-social-media data={this.getListSocialMedia()} flex-direction="row" ></sami-list-social-media>
            </div>
          ) : []
        }
        {
          (this.dropdownListGroupData) ? (
            <div>
              <sami-dropdown border={this.dropdownBorder} right={this.dropdownRight} width={this.dropdownWidth} text={this.dropdownTitle} data={this.getDropDownListGroup()} ></sami-dropdown>
            </div>
          ) : []
        }
      </div>
    );
  }

}
