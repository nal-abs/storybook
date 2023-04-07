import React from 'react';
import Tab from './common/Tab/index';

export default {
	title: 'stories/Tab',
	component: Tab,
	argTypes: {
		style: {
			control: {
				type: 'select',
				options: ['iconOnly', 'textOnly', 'iconAndText'],
			},
		},
		orientation: {
			control: {
				type: 'select',
				options: ['vertical', 'horizontal'],
			},
		},
	},
};

export const TabStories = (args) => <Tab { ...args }/>;

TabStories.args = {
	orientation: 'vertical',
	color: 'secondary', variant: 'scrollable',
	fullWidth: true,
	centered: true,
	contents: {
		todoPane: {
			label: 'TodoPane',
			component: 'Button',
			icon: 'Favorite',
		},
		taskPane: {
			label: 'TaskPane',
			component: 'CheckBox',
			icon: 'Star',
		},
	},
	style: 'iconAndText',
	value: 'todoPane',
	dir: 'rtl',
};
