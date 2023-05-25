import * as React from 'react';
import MuiSwitch from '../stories/common/Switch';

const component = {
	title: 'Inputs/Switch',
	component: MuiSwitch,
};

export default component;

const Template = (args) => <MuiSwitch { ...args }/>;

export const Switch = Template.bind({});

Switch.args = {
	size: 'large',
	color: 'success',
	checked: false,
	disabled: false,
};
