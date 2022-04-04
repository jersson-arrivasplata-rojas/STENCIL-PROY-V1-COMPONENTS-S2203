import { Component, h, Prop, Watch } from '@stencil/core';
import { IListGroup } from '../../../molecules/lists/interfaces/list-group.interface';
import { IListSocialMedia } from '../../../molecules/lists/interfaces/list-social-media.interface';
//import { IButton } from '../../buttons/interfaces/button.interface';

@Component({
  tag: 'sami-card',
  styleUrl: 'card.scss'
})
export class Card {


  @Prop() cardTag?: HTMLElement;

  /**
   * es: Ruta que redirige del card image
   * en: Route of redirect card image
   * Example: localhost/css3
   */
  @Prop() url: string = '#';

  /**
   * es: Título del card image
   * en: Title of card image
   * Example: Estilos
   */
  @Prop() cardTitle: string = '';

  /**
   * es: Sub título del card image
   * en: Subtitle of card image
   * Example: Css3
   */
  @Prop() cardSubtitle: string = '';

  @Prop() cardResume: string = '';

  @Prop() maxWidth: string = '';

  /**
   * es: Sub título del card image
   * en: Subtitle of card image
   * Example: Css3
   */
  @Prop() background: string = '';

  @Prop() borderColor: string = '';

  @Prop() borderRadius: string = '';

  @Prop() margin: string = '';

  @Prop() marginBottom: string = '';




  @Prop() imageSrc: string = '';

  @Prop() imageHeight: string = '';

  @Prop() imageWidth: string = '';

  @Prop() imageMaxWidth: string = '';

  @Prop() imageMaxHeight: string = '';


  @Prop() backgroundColor: string = '';

  @Prop() imageObjectFit: string = '';


  @Prop() footerJustifyContent: string = '';

  /*@Prop() buttonWidth: string = '';
  @Prop() buttonHeight: string = '';
  @Prop() buttonMargin: string = '';
  @Prop() buttonPadding: string = '';*/

  @Prop({ mutable: true }) listSocialMediaData: string | Array<IListSocialMedia>;

  //@Prop({ mutable: true }) listButtonData: string | Array<IButton>;

  @Prop({ mutable: true }) listGroupData: string | Array<IListGroup>;

  /**
   * es: Texto del Tag
   * en: Text of Tag
   * Example: #fff
   
  @Prop() text?: string = '';*/

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
      if (key === "fnClick" && typeof value =="string")  return eval("("+value+")"); 

      return value; 
      //return { key: value };              // else return v * 2.
    });
  }
  /*@Watch('listButtonData')
  parseListButtonData(newValue) {
    if (newValue && Array.isArray(newValue)) {
      this.listButtonData = newValue;
    } else if (newValue && typeof newValue === "string") {
      this.listButtonData = JSON.parse(newValue);
    }
  }

  private parseListButton(): Array<IButton> {
    if (Array.isArray(this.listButtonData)) {
      return this.listButtonData;
    }
    return JSON.parse(this.listButtonData);
  }*/
  /**
   * es: Retorna un json de estilos
   * en: Return a json of styles
   */
  private getStyles() {
    const styles = Object.assign({});
    (this.background) ? styles.background = this.background : delete styles.background;
    (this.maxWidth) ? styles.maxWidth = this.maxWidth : delete styles.maxWidth;
    (this.borderColor) ? styles.borderColor = this.borderColor : delete styles.borderColor;
    (this.borderRadius) ? styles.borderRadius = this.borderRadius : delete styles.borderRadius;
    (this.margin) ? styles.margin = this.margin : delete styles.margin;
    (this.marginBottom) ? styles.marginBottom = this.marginBottom : delete styles.marginBottom;
    (this.backgroundColor) ? styles.backgroundColor = this.backgroundColor : delete styles.backgroundColor;


    return styles;
  }

  private getImageStyles() {
    const styles = Object.assign({});
    (this.imageHeight) ? styles.height = this.imageHeight : delete styles.height;
    (this.imageWidth) ? styles.width = this.imageWidth : delete styles.width;
    (this.imageObjectFit) ? styles.objectFit = this.imageObjectFit : delete styles.objectFit;
    (this.imageMaxWidth) ? styles.maxWidth = this.imageMaxWidth : delete styles.maxWidth;
    (this.imageMaxHeight) ? styles.maxHeight = this.imageMaxHeight : delete styles.maxHeight;


    return styles;
  }


  private getFooterStyles() {
    const styles = Object.assign({});
    (this.footerJustifyContent) ? styles.justifyContent = this.footerJustifyContent : delete styles.justifyContent;

    return styles;
  }

  /*private getButtonStyles() {
    const styles = Object.assign({});
    (this.buttonWidth) ? styles.width = this.buttonWidth : delete styles.width;
    (this.buttonHeight) ? styles.height = this.buttonHeight : delete styles.height;
    (this.buttonMargin) ? styles.margin = this.buttonMargin : delete styles.margin;
    (this.buttonPadding) ? styles.padding = this.buttonPadding : delete styles.padding;

    return styles;
  }*/

  render() {
    //{this.cardTag ? <sami-card-tag text={this.text}></sami-card-tag>: (this.cardTag as HTMLElement)}
    return (
      <div class="sami-card" style={this.getStyles()}>
        <div class="sami-card___header">
          <img src={this.imageSrc} style={this.getImageStyles()} />
        </div>
        <div class="sami-card___body">
          <p class="sami-card___subtitle">{this.cardSubtitle}</p>
          <p class="sami-card___title">{this.cardTitle}</p>
          <p class="sami-card___resume">{this.cardResume}</p>
          <p class="sami-card___links">
            {
              (this.listSocialMediaData) ? (

                <sami-list-social-media data={this.getListSocialMedia()} flex-direction="row" ></sami-list-social-media>

              ) : ([])
            }
          </p>
        </div>
        <div class="sami-card___footer" style={this.getFooterStyles()}>

          {
            (this.listGroupData) ? (
              <sami-list-group data={this.getListGroup()} border={true} flex-direction="row" ></sami-list-group>

            ) : []
          }
        </div>
      </div>
    );
  }

}
/**
 * 
{
            this.parseListButton() ?
              this.parseListButton().map(x => {
                return (<button style={this.getButtonStyles()} onClick={x.fnClick}>
                  {x.text}
                </button>);
              }) :
              []
          }
 */
