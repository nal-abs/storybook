import React from 'react';
import Tab from '../stories/common/Tab';

export default {
	title: 'stories/Tab',
	component: Tab,
	argTypes: {
		style: {
			control: {
				type: 'select',
				options: ['iconOnly', 'textOnly', 'iconText'],
			},
		},
	},
};
const styles = {
	iconOnly: {
		icon: true,
		text: false,
	},
	textOnly: {
		icon: false,
		text: true,
	},
	iconText: {
		icon: true,
		text: true,
	},
};

export const TabStories = ({ style, ...rest }) => {
	const selectedStyle = styles[style];

	return <Tab { ...{ ...rest, selectedStyle } }/>;
};

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
			icon: 'Star',
		},
	],
	fullWidth: true,
	centered: true,
	content: {
		TodoPane: { component: 'Button',
			data: {
				collection: 'journals',
			}},
		TaskPane: { component: 'CheckBox',
			data: {
				collection: 'ledgers',
			}},
	},
	dir: 'rtl',
};
