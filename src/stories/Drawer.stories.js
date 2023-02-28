import React from 'react';
import Drawer from './Drawer';

export default {
	title: 'stories/Drawer',
	component: Drawer,
};

const Template = (args) => <Drawer { ...args }/>;

export const drawer = Template.bind({});

drawer.args = {
	direction: 'right',
	lists: [
		{ text: 'Inbox', icon: 'Add', typography: 5 },
		{ text: 'starred', icon: 'Delete', typography: 3 },
	],
};
