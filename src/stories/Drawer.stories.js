import React from 'react';
import Drawer from './common/Drawer/index';

export default {
	title: 'stories/Drawer',
	component: Drawer,
};

const Template = (args) => <Drawer { ...args }/>;

export const DrawerStory = Template.bind({});

DrawerStory.args = {
	direction: 'right',
	lists: [
		{ text: 'Inbox', icon: 'Add', typography: 5 },
		{ text: 'starred', icon: 'Delete', typography: 3 },
	],
};
