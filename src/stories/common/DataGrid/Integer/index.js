import { React, useState } from 'react';
import Input from './Input';
import transformSchema from '../transformSchema';

const IntegerInput = (context) => {
	const { value: initialValue, schema, row, field } = context;
	const [value, setValue] = useState(parseInt(initialValue, 10));

	const props = {
		variant: 'standard',
		InputProps: { disableUnderline: true },
		value: value,
		schema: schema,
		inputProps: transformSchema(schema),
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

export default IntegerInput;
