import { map, omit } from '@laufire/utils/collection';
import { Checkbox, FormControl, FormHelperText, InputLabel,
	ListItemText,
	MenuItem, Select as MuiSelect } from '@mui/material';
import { useState, React } from 'react';
import validate from '../validate';
import { nothing } from '@laufire/utils/fn';

const updateValue = ({ setState, onChange, evt }) => {
	setState(evt.target.value);
	onChange(evt);
};

const MenuList = ({	 options, state = [] }) =>
	map(options, (option, index) => {
		const checkedState = state.includes(option);

		return <MenuItem key={ index } value={ option }>
			<Checkbox checked={ checkedState }/>
			<ListItemText>{option}</ListItemText></MenuItem>;
	});

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
					&& updateValue({ setState, onChange, evt }),
				renderValue: (selectedValue) => selectedValue.join(', '),
				...rest,
			} }
		>{MenuList({ options, state })}</MuiSelect>);
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
