import React from 'react';
import Tab from '../stories/common/Tab';

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
	},
};

export const TabStories = (args) => <Tab { ...args }/>;

TabStories.args = {
	orientation: 'vertical',
	color: 'secondary', variant: 'scrollable',
	fullWidth: true,
	centered: true,
	content: {
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
