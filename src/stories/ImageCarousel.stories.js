import * as React from 'react';
import ImageCarousel from './common/ImageCarousel';
import Debugger from '../components/Debugger';

const component = {
	title: 'stories/imageCarousel',
	component: ImageCarousel,
};

export default component;

const Template = ({ count, ...value }) =>
	<Debugger { ...{ data: { count, value }} }/>;

export const imageCarousel = Template.bind({});

imageCarousel.args = {
	count: 4,
	spaceBetween: 50,
	slidesPerView: 1,
};
