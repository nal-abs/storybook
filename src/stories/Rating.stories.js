import React from 'react';
import MuiRating from './common/Rating';

const component = {
	title: 'Inputs/Rating',
	component: MuiRating,
};

export default component;

const Template = (args) => <MuiRating { ...args }/>;

export const Rating = Template.bind({});

Rating.args = {
	value: 1,
	precision: 0.5,
	size: 'small',
	emptyIcon: 'FavoriteBorder',
	selectedIcon: 'Favorite',
	sx: { color: 'green' },
	max: 3,
};
