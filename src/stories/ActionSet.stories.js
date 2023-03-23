import React from 'react';
import ActionSet from '../stories/common/ActionSet';

export default {
	title: 'stories/ActionSet',
	component: ActionSet,
	argTypes: {
		direction: {
			type: 'select',
			options: ['up', 'down', 'left', 'right'],
		},
		tooltipPlacement: { type: 'select',
			options: ['bottom-end',
				'bottom-start',
				'bottom',
				'left-end',
				'left-start',
				'left',
				'right-end',
				'right-start',
				'right',
				'top-end',
				'top-start',
				'top']		},
		hidden: {
			type: Boolean,
			options: [true, false],
		},
		tooltipOpen: { type: Boolean, options: [true, false] },
	},
};

const Template = (args) => <ActionSet { ...args }/>;

export const ActionSetStories = Template.bind({});

ActionSetStories.args = {
	type: 'menu',
	trigger: {
		children: {
			text: 'Speed Dial Icon',
		},
	},
	data: [
		{ icon: 'Save', children: 'Save' },
		{ icon: 'Print', children: 'Print' },
		{ icon: 'Share', children: 'Share' },
	],
	sx: {
		'width': '200px',
		'&:active': {
			color: 'primary.main',
		},
		'&:hover': {
			backgroundColor: '#e3f2fd',
		},
	},
	vertical: 'top',
	horizontal: 'right',
	transformVertical: 'top',
	transformHorizontal: 'left',

};
