import { map, omit } from '@laufire/utils/collection';
import { FormControl, FormHelperText, InputLabel,
	MenuItem,
	Select as MuiSelect } from '@mui/material';
import * as React from 'react';

const MenuList = (options) =>
	map(options, (option, index) =>
		<MenuItem key={ index } value={ option }>{option}</MenuItem>);

const transform = (event) => ({
	target: {
		value: event.target.value,
	},
});

const SelectBox = (context) => {
	const { options, onChange = (x) => x, value, ...rest }
	= omit(context, { something: 'helperText' });
	const [state, setState] = React.useState(value);

	const handleChange = (event) => {
		setState(event.target.value);
	};

	return (
		<MuiSelect
			{ ...{
				value: state,
				onChange: (evt) => {
					handleChange(evt);
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
		<SelectBox { ...context }/>
		<FormHelperText>{helperText}</FormHelperText>
	</FormControl>;
};

export default Select;
