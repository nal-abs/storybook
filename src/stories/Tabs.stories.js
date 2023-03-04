import React from 'react';
import Tabs from './Tabs';

export default {
	title: 'stories/Tab',
	component: Tabs,
	argTypes: {
		content: {
			control: {
				type: 'select',
			},
			options: ['Button', 'CheckBox'],
		},
	},

};

export const tabs = (args) => <Tabs { ...args }/>;

tabs.args = {
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
