import { useState, React } from 'react';
import transformSchema from '../transformSchema';
import Input from './Input';

const props = {
	variant: 'standard',
	InputProps: { disableUnderline: true },
};

const DecimalInput = (context) => {
	const { schema, value: initialValue, row, field } = context;
	const [value, setValue]	= useState(initialValue);

	return (
		<Input { ...{
			...props,
			value: value,
			schema: schema,
			inputProps: transformSchema(schema),
			onChange: ({ target: { value: newValue }}) => {
				row[field] = newValue;
				setValue(newValue);
			},
		} }
		/>
	);
};

export default DecimalInput;
