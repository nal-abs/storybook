/* eslint-disable no-console */
/* eslint-disable no-inline-comments */
import ImageCarousel from './common/ImageCarousel';
import Debugger from './common/Debugger';

const component = {
	title: 'stories/imageCarousel',
	component: ImageCarousel,
};

export default component;

const Template = Debugger;

export const imageCarousel = Template.bind({});

imageCarousel.args = {
	count: 4,
	direction: 'horizontal', /* 'horizontal' | 'vertical' */
	loop: 'false',
	modules: [],
	watchOverflow: true,
	onAutoPlay: {
		speed: 300,
		followFinger: 'true',
		grabCursor: 'true',
		effect: 'slide', /* 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'*/
	},
	spaceBetween: 10,
	slidesPerView: 1,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		720: {
			slidesPerView: 5,
			spaceBetween: 50,
		},
		1080: {
			slidesPerView: 6,
			spaceBetween: 60,
		},
	},
	onAny: (eventName, ...args) => {
		console.log('Event: ', eventName);
		console.log('Event data: ', args);
	},
};
