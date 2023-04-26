import { React, useState } from 'react';
import Input from './Input';

const props = {
	InputProps: { disableUnderline: true },
	type: 'time',
	variant: 'standard',
};
const TimeInput = (context) => {
	const { value: initialValue = '', row, field, schema } = context;
	const [value, setValue] = useState(initialValue);

	return (
		<Input { ...{
			...props,
			value: value,
			schema: schema,
			onChange: ({ target: { value: newValue }}) => {
				row[field] = newValue;

				return setValue(newValue);
			},
		} }
		/>);
};

export default TimeInput;
