/* eslint-disable no-console */
import React from 'react';
import CheckBox from '../stories/common/CheckBox';

export default {
	title: 'stories/CheckBox',
	component: CheckBox,
};

const Template = (args) => <CheckBox { ...args }/>;

export const checkbox = Template.bind({});

checkbox.args = {
	checked: true,
	color: 'success',
	defaultChecked: true,
	disabled: false,
	disableRipple: false,
	size: 'small',
	sx: {},
};
