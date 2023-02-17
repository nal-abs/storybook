/* eslint-disable no-console */
import React from 'react';
import DisplayTab from './DisplayTab';

export default {
	title: 'components/DisplayTab',
	component: DisplayTab,
};

export const displayTab = (args) => <DisplayTab { ...args }/>;

displayTab.args = {
	context: {
		state: {
			value: 'TodoPane',
		},
		actions: {
			selectedTab: (evt) =>
				console.log(evt),
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
