import React from 'react';
import DisplayTab from './DisplayTab';

export default {
	title: 'components/DisplayTab',
	component: DisplayTab,
};

const Template = (args) => <DisplayTab { ...args }/>;

export const displayTab = Template.bind({});

displayTab.args = {
	context: {
		state: {
			value: 'TodoPane',
		},
		prop: {
			orientation: 'vertical',
			color: 'secondary', variant: 'scrollable',
			data: [
				{
					label: 'TodoPane',
					component: 'item1',
				},
				{
					label: 'TaskPane',
					component: 'item2',
				},
			],
		},
	},

};
