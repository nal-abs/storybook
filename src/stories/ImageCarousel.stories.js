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
	spaceBetween: 50,
	slidesPerView: 1,
};
