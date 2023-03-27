/* eslint-disable max-lines-per-function */
import { map } from '@laufire/utils/collection';
import { FormControl, FormHelperText, InputLabel,
	MenuItem,
	Select as MuiSelect } from '@mui/material';
import * as React from 'react';

const SelectBox = ({ autoWidth, size, multiple,
	label, options, disableUnderline, onChange = (x) => x }) => {
	const [value, setValue] = React.useState([]);

	const handleChange = (event) => {
		setValue(event.target.value);
	};
	const transform = (event) => ({
		target: {
			value: event.target.value,
		},
	});

	return (
		<MuiSelect
			value={ value }
			label={ label }
			onChange={ (evt) => {
				handleChange(evt);
				onChange(transform(evt));
			} }
			autoWidth={ autoWidth }
			size={ size }
			multiple={ multiple }
			disableUnderline={ disableUnderline }
		>
			{map(options, (option, index) =>
				<MenuItem key={ index } value={ option }>{option}</MenuItem>)}
		</MuiSelect>);
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
