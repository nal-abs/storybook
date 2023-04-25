import { React, useState } from 'react';
import Input from './Input';

const PhoneNoInput = (context) => {
	const { value: initialValue, schema, row, field } = context;
	const [value, setValue] = useState(initialValue);
	const props = {
		variant: 'standard',
		InputProps: { disableUnderline: true },
		value: value,
		schema: schema,
	};

	return (
		<Input { ...{
			...props,
			onChange: ({ target: { value: newValue }}) => {
				row[field] = newValue;

				return setValue(newValue);
			},
		} }
		/>);
};

export default PhoneNoInput;
