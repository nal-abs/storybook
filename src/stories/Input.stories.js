import React from 'react';
import MuiInput from '../stories/common/Input';

const component = {
	title: 'Inputs/Input',
	component: MuiInput,
};

export default component;

const Template = (args) => <MuiInput { ...args }/>;

export const Input = Template.bind({});

Input.args = {
	variant: 'filled',
	label: 'Required',
	required: true,
	disabled: false,
	type: 'password',
	helperText: 'Some important message',
	error: false,
	multiline: { rows: 5 },
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
