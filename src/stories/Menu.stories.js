import React from 'react';
import MuiMenu from './common/Menu/index';

const component = {
	title: 'Navigation/Menu',
	component: MuiMenu,
};

export default component;

const Template = (args) => <MuiMenu { ...args }/>;

export const Menu = Template.bind({});

Menu.args = {
	trigger: { children: { text: 'Click me!' }},
	data: [
		{
			children: 'Inbox',
			icon: 'Check',
			typography: 5,
		},
		{ children: 'Drafts' },
		{ children: 'Starred' },
		{ children: 'Junk' },
	],
	sx: {
		'width': '200px',
		'&:active': { color: 'primary.main' },
		'&:hover': { backgroundColor: '#e3f2fd' },
	},
	vertical: 'top',
	horizontal: 'right',
	transformVertical: 'top',
	transformHorizontal: 'left',
};
