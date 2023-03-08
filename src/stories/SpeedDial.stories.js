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
	},
};

const Template = (args) => <SpeedDial { ...args }/>;

export const SpeedDialStories = Template.bind({});

SpeedDialStories.args = {
	actions: [
		{ icon: 'Save', name: 'Save' },
		{ icon: 'Print', name: 'Print' },
		{ icon: 'Share', name: 'Share' },
	],
	hidden: true,
	tooltipOpen: true,
	icon: 'Delete',
};
