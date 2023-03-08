import React from 'react';
import SpeedDial from './SpeedDial';

export default {
	title: 'stories/SpeedDial',
	component: SpeedDial,
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

const Template = (args) => <SpeedDial { ...args }/>;

export const SpeedDialStories = Template.bind({});

SpeedDialStories.args = {
	trigger: {
		children: {
			text: 'SpeedDialIcon',
		},
	},
	data: [
		{ icon: 'Save', children: 'Save' },
		{ icon: 'Print', children: 'Print' },
		{ icon: 'Share', children: 'Share' },
	],
	icon: 'Delete',
};
