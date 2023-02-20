/* eslint-disable no-console */
import React from 'react';
import MuiButton from './MuiButton';

export default {
	title: 'Atoms/MuiButton',
	component: MuiButton,
};

const Template = (args) => <MuiButton { ...args }/>;

export const muiButton = Template.bind({});

muiButton.args = {
	context: {
		actions: {
			addTodo: () => console.log('hello'),
		},
		state: {
			input: 'hi',
		},
	},
};
