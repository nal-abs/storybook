/* eslint-disable max-lines-per-function */
import { map, omit } from '@laufire/utils/collection';
import { Checkbox, FormControl, FormHelperText, InputLabel,
	ListItemText,
	MenuItem, Select as MuiSelect } from '@mui/material';
import { useState, React } from 'react';
import validate from './DataGrid/Date/validate';

const getUpdate = (
	evt, setState, onChange
) => {
	setState(evt.target.value);
	onChange(evt);
};

const MenuList = ({	schema: { widget }, validSchema, options, state = [] }) =>
	map(options, (option, index) => {
		const checkedState = state.includes(option)
	&& validate(state, validSchema);

		return <MenuItem key={ index } value={ option }>
			{widget === 'checkbox'
				&& <Checkbox checked={ checkedState }/>}
			<ListItemText>{option}</ListItemText></MenuItem>;
	});

const DropDown = (context) => {
	const {
		options, onChange = (x) => x, multiple, value, schema = {}, ...rest
	} = context;
	const [state, setState] = useState(value);
	const validSchema = omit(schema, { something: 'widget' });

	const handleChange = (evt) => (multiple
		? validate(evt.target.value, validSchema)
			? getUpdate(
				evt, setState, onChange
			)
			: state
		: setState(evt.target.value));

	return (
		<MuiSelect
			{ ...{
				value: state,
				multiple: multiple,
				onChange: handleChange,
				...multiple && { renderValue: (selectedValue) =>
					selectedValue.join(', ') },
				...rest,
			} }
		>{MenuList({ schema, validSchema, options, state })}</MuiSelect>);
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
