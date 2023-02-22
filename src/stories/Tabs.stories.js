import React from 'react';
import context from '../../src/core/context';
import Button from './Button';
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
	props: {
		orientation: 'vertical',
		color: 'secondary', variant: 'scrollable',
		data: [
			{
				label: 'TodoPane',
				component:
	<Button { ...{ ...context,
		props: { children: 'Hi', variant: 'contained' }} }
	/>,
			},
			{
				label: 'TaskPane',
				component: 'item2',
			},
		],
	},
};
