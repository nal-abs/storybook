/* eslint-disable max-lines-per-function */
import { map } from '@laufire/utils/collection';
import {
	FormControl, FormHelperText, InputLabel,
	ListItemText,
	MenuItem, Select as MuiSelect,
} from '@mui/material';
import { React, useState } from 'react';
import { nothing } from '@laufire/utils/fn';

const MenuList = (options) =>
	map(options, (option, index) =>
		<MenuItem key={ index } value={ option }>
			<ListItemText>{ option }</ListItemText></MenuItem>);

const DropDown = (context) => {
	const {
		options, onChange = nothing,
		multiple, value, ...rest
	} = context;
	const [state, setState] = useState(value);

	return (
		<MuiSelect
			{ ...{
				value: state,
				multiple: multiple,
				onChange: (evt) => {
					setState(evt.target.value);
					onChange(evt);
				},
				...multiple
				&& { renderValue: (selectedValue) => selectedValue.join(', ') },
				...rest,
			} }
		>{ MenuList(options) }</MuiSelect>);
};

const Select = (context) => {
	const { helperText, label, sx, variant, ...rest } = context;

	return <FormControl sx={ sx } variant={ variant }>
		<InputLabel>{ label }</InputLabel>
		<DropDown { ...rest }/>
		<FormHelperText>{ helperText }</FormHelperText>
	</FormControl>;
};

export default Select;
