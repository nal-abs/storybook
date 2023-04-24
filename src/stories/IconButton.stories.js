import React from 'react';
import MuiIconButton from './common/IconButton';

const component = {
	title: 'Inputs/IconButton',
	component: MuiIconButton,
};

export default component;

const Template = (args) => <MuiIconButton { ...args }/>;

export const IconButton = Template.bind({});

IconButton.args = {
	icon: 'Menu',
	size: 'large',
	color: 'success',
	disabled: false,
	href: 'https://mui.com/material-ui/react-button/',
	sx: { border: '10px solid black' },
};
