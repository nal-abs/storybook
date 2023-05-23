import { React, useState } from 'react';
import dataFormatter from '../dataFormatter';
import MuiSelect from './MultiSelectCheckbox';
import updateRow from '../updateRow';

const selectProps = {
	disableUnderline: true,
	variant: 'standard',
	multiple: true,
	sx: { width: '150px' },
};

const CheckBoxGroupWrapper = (context) => {
	const { schema: { items, widget }, schema } = context;
	const [value, setValue] = useState([]);
	const multiSelectType = items.enum ? 'enum' : 'oneOf';

	return (
		<MuiSelect { ...{
			options: dataFormatter[multiSelectType](items),
			widget: widget,
			onChange: ({ target: { value: newValue }}) => {
				updateRow({ ...context, value: newValue });
				setValue(newValue);
			},
			value: value,
			schema: schema,
			...selectProps,
		} }
		/>);
};

export default CheckBoxGroupWrapper;
