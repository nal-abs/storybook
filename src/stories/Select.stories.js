import React from 'react';
import Select from './Select';

export default {
	title: 'stories/DropDown',
	component: Select,
};

export const SelectStories = (args) => <Select { ...args }/>;

SelectStories.args = {
	lists: ['Ten', 'Twenty', 'Thirty'],
	label: 'Number',
	variant: 'standard',
	fullWidth: true,
	helperText: 'welcome to selectBox',
	autoWidth: true,
	size: 'small',
	required: false,
	disabled: false,
	error: false,
	multiple: false,
};
