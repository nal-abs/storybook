/* eslint-disable no-console */
import React from 'react';
import Button from '../stories/common/Button';

export default {
	title: 'stories/button',
	component: Button,
};

const Template = (args) => <Button { ...args }/>;

export const button = Template.bind({});

button.args = {
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
