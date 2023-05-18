import * as React from 'react';
import MuiSlider from './common/Slider';

const component = {
	title: 'Inputs/Slider',
	component: MuiSlider,
};

export default component;

const Template = (args) => <MuiSlider { ...args }/>;

export const Slider = Template.bind({});

Slider.args = {
	size: 'large',
	color: 'success',
	defaultValue: 20,
	min: 0,
	max: 100,
	step: 10,
	sx: { width: 200, alignItems: 'center' },
	valueLabelDisplay: 'auto',
};
