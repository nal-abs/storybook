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
	orientation: 'vertical',
	color: 'secondary', variant: 'scrollable',
	data: [
		{
			label: 'TodoPane',
			content:
	<Button { ...{ ...context,
		children: 'Hi', variant: 'contained' } }
	/>,
			icon: 'Favorite',
		},
		{
			label: 'TaskPane',
			content: 'item2',
		},
	],
	fullWidth: true,
	centered: true,
};
