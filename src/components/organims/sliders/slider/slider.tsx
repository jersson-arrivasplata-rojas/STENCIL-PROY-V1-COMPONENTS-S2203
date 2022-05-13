import { Component, Element, Prop, State, h } from '@stencil/core';

@Component({
	tag: 'sami-slider',
	styleUrl: 'slider.scss'
})
export class Slider {
	//@Element() el: HTMLElement;
	@Element() host: HTMLDivElement;

	@Prop() showStatus: boolean = false;
	@State() currentSlideNumber: number = 0;
	private slidesCount: number = 0;
	private slides: NodeList;
	private sliderList: HTMLElement;
	private slideWidth: number = 0;
	private controls: object = {
		prev: null,
		next: null
	};
	class: string[] = [];

	constructor() {
		this.class = (this.host.className).split(' ');
	}
	componentWillLoad() {
		this.slides = this.host.querySelectorAll('li');
		this.slidesCount = this.slides.length;
	}

	componentDidLoad() {
		//this.sliderList = this.el.shadowRoot.querySelector('ul');
		this.sliderList = this.host.querySelector('ul');
		this.slideWidth = (this.slides[0] as HTMLElement).offsetWidth;
		for (let type in this.controls) {
			//this.controls[type] = this.el.shadowRoot.querySelector('.btn_' + type);
			this.controls[type] = this.host.querySelector('.btn_' + type);
		}
		this.updateControls();
	}

	componentDidUpdate() {
		this.sliderList.style.transform = `translateX(${this.currentSlideNumber * this.slideWidth * -1}px)`;
		this.updateControls();
	}

	slide(amount: number = 1) {
		let slideTo = this.currentSlideNumber + amount;
		if (slideTo < 0 || slideTo >= this.slidesCount)
			return;
		this.currentSlideNumber = slideTo;
	}

	updateControls() {
		this.switchControl('prev', (this.currentSlideNumber === 0) ? false : true);
		this.switchControl('next', (this.currentSlideNumber === this.slidesCount - 1) ? false : true);
	}

	switchControl(type: string, enabled: boolean) {
		if (this.controls[type])
			this.controls[type].disabled = !enabled;
	}
	private getClass(): string {

		return this.class.join(' ');
	}

	validateSlideCount() {
		return !Boolean(this.slidesCount > 1);
	}
	render() {
		return (
			<div class={`sami-slider ${this.getClass()}`}>
				<button type="button" class="sami-slider___button btn_next" onClick={this.slide.bind(this, 1)} hidden={this.validateSlideCount()}>&gt;</button>
				<button type="button" class="sami-slider___button btn_prev" onClick={this.slide.bind(this, -1)} hidden={this.validateSlideCount()}>&lt;</button>
				<ul class={`sami-slider___ul`}>
					<slot />
				</ul>
				{this.showStatus && <div>Slide {this.currentSlideNumber + 1}/{this.slidesCount}</div>}
			</div>
		);
	}

}
