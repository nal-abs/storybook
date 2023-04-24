import React from 'react';
import MuiDrawer from './common/Drawer/index';

const component = {
	title: 'Navigation/Drawer',
	component: MuiDrawer,
};

export default component;

const Template = (args) => <MuiDrawer { ...args }/>;

export const Drawer = Template.bind({});

Drawer.args = {
	direction: 'right',
	lists: [
		{ text: 'Inbox', icon: 'Add', typography: 5 },
		{ text: 'starred', icon: 'Delete', typography: 3 },
	],
};
