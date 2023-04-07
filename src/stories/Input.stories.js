import React from 'react';
import Input from '../stories/common/Input';

export default {
	title: 'stories/Input',
	component: Input,
};

const Template = (args) => <Input { ...args }/>;

export const input = Template.bind({});

input.args = {
	variant: 'filled',
	label: 'Required',
	required: true,
	disabled: false,
	type: 'password',
	helperText: 'Some important message',
	error: false,
	multiline: {
		rows: 5,
	},
	focused: false,
	placeholder: 'Enter some value',
	fullWidth: false,
	select: false,
	margin: 'none',
	size: 'small',
	adornments: {
		start: {
			text: '',
			icon: 'Delete',
		},
		end: {
			text: 'kg',
			icon: '',
		},
	},
	value: 1,
};
