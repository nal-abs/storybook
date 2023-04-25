import * as React from 'react';
import Switch from '../stories/common/Switch';

const component = {
	title: 'stories/Switch',
	component: Switch,
};

export default component;

const Template = (args) => <Switch { ...args }/>;

export const muiSwitch = Template.bind({});

muiSwitch.args = {
	size: 'large',
	color: 'success',
	checked: false,
	disabled: false,
};
