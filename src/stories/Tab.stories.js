import React from 'react';
import Tab from './Tab';

export default {
	title: 'stories/Tab',
	component: Tab,
	argTypes: {
		content: {
			control: {
				type: 'select',
			},
			options: ['Button', 'CheckBox'],
		},
	},

};

export const tab = (args) => <Tab { ...args }/>;

tab.args = {
	orientation: 'vertical',
	color: 'secondary', variant: 'scrollable',
	data: [
		{
			label: 'TodoPane',
			content: 'Button',
			icon: 'Favorite',
		},
		{
			label: 'TaskPane',
			content: 'CheckBox',
		},
	],
	fullWidth: true,
	centered: true,
	content: 'Button',
};
