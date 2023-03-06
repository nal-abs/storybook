import React from 'react';
import Tab from './Tab';

export default {
	title: 'stories/Tab',
	component: Tab,
};

export const TabStories = (args) => <Tab { ...args }/>;

TabStories.args = {
	orientation: 'vertical',
	color: 'secondary', variant: 'scrollable',
	data: [
		{
			label: 'TodoPane',
			icon: 'Favorite',
		},
		{
			label: 'TaskPane',
		},
	],
	// fullWidth: true,
	// centered: true,
	content: {
		TodoPane: 'Button',
		TaskPane: 'CheckBox',
	},
};
