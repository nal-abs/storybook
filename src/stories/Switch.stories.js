import * as React from 'react';
import Switch from '../stories/common/Switch';

export default {
	title: 'stories/muiSwitch',
	component: Switch,
};

const Template = (args) => <Switch { ...args }/>;

export const muiSwitch = Template.bind({});

muiSwitch.args = {
	size: 'large',
	color: 'success',
	checked: false,
	disabled: false,
};
