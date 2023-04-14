/* eslint-disable max-lines-per-function */
import { useState, React } from 'react';
import Input from '../Input';
import transformSchema from './IntegerTextField/transformSchema';
import numberValidator from './numberValidator';

const NumberTextField = (context) => {
	const { props: { data: schema }, value, row, field } = context;
	const [numberValue, setValue]	= useState(value);

	return (
		<Input { ...{
			variant: 'standard',
			type: 'number',
			value: numberValue.toString(),
			onChange: ({ target: { value: number }}) =>
				setValue((prev) => {
					const newValue = numberValidator(schema, number)
						? number
						: prev;

					row[field] = newValue;
					return newValue;
				}),
			InputProps: { disableUnderline: true },
			inputProps: transformSchema(schema),
		} }
		/>
	);
};

export default NumberTextField;
