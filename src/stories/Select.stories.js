import React from 'react';
import MuiSelect from '../stories/common/Select';

const component = {
	title: 'Inputs/Select',
	component: MuiSelect,
};

export default component;

export const Select = (args) => <MuiSelect { ...args }/>;

Select.args = {
	options: ['Ten', 'Twenty', 'Thirty'],
	label: 'Number',
	variant: 'standard',
	fullWidth: true,
	helperText: 'welcome to selectBox',
	autoWidth: true,
	size: 'small',
	required: false,
	disabled: false,
	error: false,
	multiple: true,
	sx: { width: 300 },
	disableUnderline: false,
	value: [],
};
