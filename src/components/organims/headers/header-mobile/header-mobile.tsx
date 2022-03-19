import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sami-header-mobile',
  styleUrl: 'header-mobile.scss'
})
export class HeaderMobile {



  @Prop() hyperlinkBackgroundImage: string;

  @Prop() hyperlinkMaxWidth: string;

  @Prop() hyperlinkBorderRadius: string;

  @Prop() hyperlinkBackground: string;
  
  @Prop() hyperlinkUrl: string;

  @Prop() hyperlinkTarget: string;
  render() {
    
    return (
      <div class='sami-header-mobile'>
        <sami-hyperlink-image
          background-image={this.hyperlinkBackgroundImage} 
          url={this.hyperlinkUrl}
          max-width={this.hyperlinkMaxWidth}
          border-radius={this.hyperlinkBorderRadius}
          background={this.hyperlinkBackground}
          target={this.hyperlinkTarget}
        ></sami-hyperlink-image>
      </div>
    );
  }

}
