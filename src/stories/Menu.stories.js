import React from 'react';
import Menu from './Menu';

export default {
	title: 'stories/Menu',
	component: Menu,
};

const Template = (args) => <Menu { ...args }/>;

export const menu = Template.bind({});

menu.args = {
	trigger: {
		children: {
			text: 'Click me!',
		},
	},
	data: [
		{ children: 'Inbox',
			icon: 'Check',
			typography: 5 },
		{ children: 'Drafts' },
		{ children: 'Starred' },
		{ children: 'Junk' },
	],
};
