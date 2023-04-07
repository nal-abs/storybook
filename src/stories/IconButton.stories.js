import React from 'react';
import IconButton from './common/IconButton';

export default {
	title: 'stories/IconButton',
	component: IconButton,
};

const Template = (args) => <IconButton { ...args }/>;

export const IconButtonStory = Template.bind({});

IconButtonStory.args = {
	icon: 'Menu',
	size: 'large',
	color: 'success',
	disabled: false,
	href: 'https://mui.com/material-ui/react-button/',
	sx: { border: '10px solid black' },
};
