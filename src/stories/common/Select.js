import { map, omit } from '@laufire/utils/collection';
import { FormControl, FormHelperText, InputLabel,
	MenuItem,
	Select as MuiSelect } from '@mui/material';
import * as React from 'react';

const transform = (event) => ({
	target: {
		value: event.target.value,
	},
});

const MenuList = (options) =>
	map(options, (option, index) =>
		<MenuItem key={ index } value={ option }>{option}</MenuItem>);

const DropDown = (context) => {
	const { options, onChange = (x) => x, value, ...rest }
	= omit(context, { something: 'helperText' });
	const [state, setState] = React.useState(value);

	return (
		<MuiSelect
			{ ...{
				value: state,
				onChange: (evt) => {
					setState(evt.target.value);
					onChange(transform(evt));
				},
				...rest,
			} }
		>{MenuList(options)}</MuiSelect>);
};

const Select = (context) => {
	const { helperText, label, sx, variant } = context;

	return <FormControl sx={ sx } variant={ variant }>
		<InputLabel>{label}</InputLabel>
		<DropDown { ...context }/>
		<FormHelperText>{helperText}</FormHelperText>
	</FormControl>;
};

export default Select;
