import { map, omit } from '@laufire/utils/collection';
import { Checkbox, FormControl, FormHelperText, InputLabel,
	ListItemText,
	MenuItem, Select as MuiSelect } from '@mui/material';
import { useState, React } from 'react';
import validate from './validate/validate';
import { nothing } from '@laufire/utils/fn';

const getValidValue = (evt, props) => {
	const { onChange, setState, state, validSchema } = props;

	const updateValue = () => {
		setState(evt.target.value);
		onChange(evt);
	};

	return validate(evt.target.value, validSchema)
		? updateValue()
		: state;
};

const MenuList = ({	validSchema, options, state = [] }) =>
	map(options, (option, index) => {
		const checkedState = state.includes(option)
	&& validate(state, validSchema);

		return <MenuItem key={ index } value={ option }>
			<Checkbox checked={ checkedState }/>
			<ListItemText>{option}</ListItemText></MenuItem>;
	});

const handleChange = (evt, props) => {
	const { setState, multiple } = props;

	return multiple
		?	getValidValue(evt, props)
		: setState(evt.target.value);
};

const DropDown = (context) => {
	const {
		options, onChange = nothing, multiple, value, schema = {}, ...rest
	} = context;
	const [state, setState] = useState(value);
	const validSchema = omit(schema, { something: 'widget' });
	const props = { onChange, setState, state, validSchema, multiple };

	return (
		<MuiSelect
			{ ...{
				value: state,
				multiple: multiple,
				onChange: (evt) => handleChange(evt, props),
				renderValue: (selectedValue) =>
					selectedValue.join(', '),
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
