import { Component, Element, h, Listen, Prop, State } from '@stencil/core';
import { Devices } from '@jersson-arrivasplata-rojas/sami-utils/core/build';

@Component({
  tag: 'sami-card-code',
  styleUrl: 'card-code.scss'
})
export class CardCode {
  @Element() host: HTMLDivElement;

  @Prop() box?: boolean = false;

  @Prop() preview?: boolean = false;

  @Prop() directionRight?: boolean = false;

  @Prop() flexDirection?: string;

  @Prop() identify?: string = "";

  @Prop() author?: string = "";

  @Prop() authorEmail?: string = "";

  @Prop() backgroundColor?: string = "#ffffff";

  @Prop() authorFontSize?: string = "";

  @Prop() contentTitleFontSize?: string = "";

  @Prop() contentTitle?: string = "";

  @Prop() contentSubtitleFontSize?: string = "";

  @Prop() contentSubtitle?: string = "";


  @Prop() titleImage?: string = "";

  @Prop() titleImageFontSize?: string = "";


  @Prop() subtitleImage?: string = "";

  @Prop() subtitleImageFontSize?: string = "";

  @Prop() backgroundImage?: string = "";
  @Prop() paddingRight?: string;
  @Prop() paddingLeft?: string;
  @Prop() marginTop?: string;
  @Prop() type?: string = "";
  @State() width: string = "";
  class: string[] = [];

  constructor() {
  }

  @Listen('resize', { target: 'window' })
  handleScroll(e: Event) {
    //const array = Array.from(e.srcElement['path']);
    const target = e.target as Window;
    this.validate(target);//target
  }
  componentWillLoad(){
    const className: string = this.host.className;
    this.class = (className).split(' ');
    this.host.className = '';
    
  }
  componentDidLoad() {
    this.validate(window);//window

  }

  private validate(target: Window) {//target: Window //innerWidth
    let measures = {
      'width': (new Devices().isMobile()) ? target['screen']['width'] : target['innerWidth'],
    };
    if (measures.width <= 550) {
      this.host.parentElement.parentElement.parentElement.style.maxWidth = (measures.width-20) + 'px';
      this.width = (measures.width-20) + 'px';
    } else {
      this.width = '';
    }
  }

  private getStyles() {
    const styles = Object.assign({});
    (this.width) ? styles.width = this.width : delete styles.width;
    (this.flexDirection) ? styles.flexDirection = `url(${this.flexDirection})` : delete styles.flexDirection;
    (this.backgroundColor) ? styles.borderColor = `${this.backgroundColor}` : delete styles.borderColor;

    return styles;
  }

  private getAuthorStyles() {
    const styles = Object.assign({});
    (this.authorFontSize) ? styles.authorFontSize = `url(${this.authorFontSize})` : delete styles.authorFontSize;

    return styles;
  }

  private getSectionTwoStyles() {
    const styles = Object.assign({});
    (this.backgroundColor) ? styles.borderColor = `url(${this.backgroundColor})` : delete styles.borderColor;

    return styles;
  }

  private getSectionOneStyles() {
    const styles = Object.assign({});
    (this.backgroundColor) ? styles.backgroundColor = `${this.backgroundColor}` : delete styles.backgroundColor;

    return styles;
  }

  private getContentStyles() {
    const styles = Object.assign({});
    (this.paddingRight) ? styles.paddingRight = `${this.paddingRight}` : delete styles.paddingRight;
    (this.paddingLeft) ? styles.paddingLeft = `${this.paddingLeft}` : delete styles.paddingLeft;
    (this.marginTop) ? styles.marginTop = `${this.marginTop}` : delete styles.marginTop;

    return styles;
  }
  private getClass(): string {

    return this.class.join(' ');
  }
  render() {
    //{{ 'sami-card-code': true, 'active': this.box }} 
    //{this.cardTag ? <sami-card-tag text={this.text}></sami-card-tag>: (this.cardTag as HTMLElement)}
    this.validate(window);
    return (
      <div class={`sami-card-code ${(this.box) ? 'active' : ''} ${this.getClass()}`} style={this.getStyles()} id={`sami-card-code___` + this.identify}>
        <div class={{ 'sami-card-code___section-one': true }} style={this.getSectionOneStyles()}>
          <div class="sami-card-code___header ">
            <p class={{ 'sami-card-code___title': true }} style={{ 'fontSize': this.titleImageFontSize }}>{this.titleImage}</p>
            <p class={{ 'sami-card-code___subtitle': true }} style={{ 'fontSize': this.subtitleImageFontSize }}>{this.subtitleImage}</p>
          </div>
          <div class="sami-card-code___img">
            <img class={this.type} src={this.backgroundImage} />
          </div>
        </div>

        <div class={{ 'sami-card-code___section-two': true, 'right': this.directionRight }} style={this.getSectionTwoStyles()}>
          <slot name="counter"></slot>
          <p class="sami-card-code___title " style={{ 'fontSize': this.contentTitleFontSize }}>
            {this.contentTitle}
          </p>
          <p class="sami-card-code___subtitle" style={{ 'fontSize': this.contentSubtitleFontSize }}>
            {this.contentSubtitle}
          </p>
          <div class="sami-card-code___content" style={!this.preview ? this.getContentStyles() : ''}>
            {this.preview ? <div class='sami-card-code___preview-html'><slot name="view-html"></slot></div> : <slot name="view-html"></slot>}
          </div>
          <p class='sami-card-code___author' style={this.getAuthorStyles()}>
            <span>{this.authorEmail}</span>
          </p>
        </div>
      </div>
    );
  }

}