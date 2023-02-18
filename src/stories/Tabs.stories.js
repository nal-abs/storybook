import React from 'react';
import Tabs from './Tabs';

export default {
	title: 'stories/Tab',
	component: Tabs,
};

export const tabs = (args) => <Tabs { ...args }/>;

tabs.args = {
	state: {
		tab: 'TodoPane',
	},
	actions: {},
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
};
