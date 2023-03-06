import { map } from '@laufire/utils/collection';
import { FormControl, FormHelperText, InputLabel,
	MenuItem,
	Select as MuiSelect } from '@mui/material';
import * as React from 'react';

const SelectBox = ({ autoWidth, size, multiple,
	label, lists }) => {
	const [value, setValue] = React.useState([]);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<MuiSelect
			value={ value }
			label={ label }
			onChange={ handleChange }
			autoWidth={ autoWidth }
			size={ size }
			multiple={ multiple }
		>
			{map(lists, (list, index) =>
				<MenuItem key={ index } value={ list }>{list}</MenuItem>)}
		</MuiSelect>);
};

const Select = (context) => {
	const { helperText, label, ...rest } = context;

	return <FormControl { ...rest }>
		<InputLabel>{label}</InputLabel>
		<SelectBox { ...context }/>
		<FormHelperText>{helperText}</FormHelperText>
	</FormControl>;
};

export default Select;
