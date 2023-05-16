import { map } from '@laufire/utils/collection';
import { Checkbox, FormControl, FormHelperText, InputLabel,
	ListItemText,
	MenuItem, Select as MuiSelect } from '@mui/material';
import { useState, React } from 'react';

const MenuList = ({	widget, options, value }) =>
	map(options, (option, index) => <MenuItem key={ index } value={ option }>
		{widget === 'checkbox'
			&& <Checkbox checked={ value.includes(option) }/>}
		<ListItemText>{option}</ListItemText></MenuItem>);

const DropDown = (context) => {
	const {
		options, onChange = (x) => x, multiple, value, widget, ...rest
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
				...multiple && { renderValue: (selectedValue) =>
					selectedValue.join(', ') },
				...rest,
			} }
		>{MenuList({ widget, options, value })}</MuiSelect>);
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
