import { map } from '@laufire/utils/collection';
import { FormControl, FormHelperText, InputLabel,
	MenuItem, Select as MuiSelect } from '@mui/material';
import { useState, React } from 'react';

const MenuList = (options) =>
	map(options, (option, index) =>
		<MenuItem key={ index } value={ option }>{option}</MenuItem>);

const DropDown = (context) => {
	const { options, onChange = (x) => x, value, ...rest } = context;
	const [state, setState] = useState(value);

	return (
		<MuiSelect
			{ ...{
				value: state,
				onChange: (evt) => {
					setState(evt.target.value);
					onChange(evt);
				},
				...rest,
			} }
		>
			{MenuList(options)}
		</MuiSelect>);
};

const Select = (context) => {
	const { helperText, label, sx, variant, ...rest } = context;

	return <FormControl sx={ sx } variant={ variant }>
		<InputLabel>{label}</InputLabel>
		<DropDown { ...rest }/>
		<FormHelperText>{helperText}</FormHelperText>
	</FormControl>;
};

export default Select;
