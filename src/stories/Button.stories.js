import React from 'react';
import MuiButton from '../stories/common/Button';

const component = {
	title: 'Inputs/Button',
	component: MuiButton,
};

export default component;

const Template = (args) => <MuiButton { ...args }/>;

export const Button = Template.bind({});

Button.args = {
	children: 'HI',
	variant: 'contained',
	size: 'large',
	color: 'success',
	disabled: false,
	disableElevation: true,
	startIcon: 'Delete',
	fullWidth: false,
	href: 'https://mui.com/material-ui/react-button/',
	disableFocusRipple: true,
	disableRipple: false,
	sx: { border: '10px solid black' },
};
