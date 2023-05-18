import { map, omit } from '@laufire/utils/collection';
import { FormControl, FormHelperText, InputLabel,
	ListItemText,
	MenuItem, Select as MuiSelect } from '@mui/material';
import { useState, React } from 'react';
import validate from './DataGrid/validate/validate';
import { nothing } from '@laufire/utils/fn';

const getValidValue = ({ onChange, setState, evt }) => {
	setState(evt.target.value);
	onChange(evt);
};

const MenuList = (options) =>
	map(options, (option, index) =>
		<MenuItem key={ index } value={ option }>
			<ListItemText>{option}</ListItemText></MenuItem>);

const DropDown = (context) => {
	const {
		options, onChange = nothing, multiple, value, schema = {}, ...rest
	} = context;
	const [state, setState] = useState(value);
	const validSchema = omit(schema, { something: 'widget' });

	return (
		<MuiSelect
			{ ...{
				value: state,
				multiple: multiple,
				onChange: (evt) => validate(evt.target.value, validSchema)
					&& getValidValue({ onChange, setState, evt }),
				...multiple
				&& { renderValue: (selectedValue) => selectedValue.join(', ') },
				...rest,
			} }
		>{MenuList(options)}</MuiSelect>);
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
