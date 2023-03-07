import * as React from 'react';
import Pagination from './Pagination';

export default {
	title: 'stories/Pagination',
	component: Pagination,
};

const Template = (args) => <Pagination { ...args }/>;

export const PaginationStories = Template.bind({});

PaginationStories.args = {
	count: 5,
	color: 'secondary',
	disabled: false,
	variant: 'outlined',
	size: 'small',
	shape: 'rounded',
	showFirstButton: false,
	showLastButton: false,
	hidePrevButton: false,
	hideNextButton: false,
	defaultPage: 2,
};
