/* eslint-disable max-lines-per-function */
import { useState, React } from 'react';
import Input from '../Input';
import transformSchema from './IntegerTextField/transformSchema';
import numberValidator from './numberValidator';

const errorMessage = (error) => !error
	&& { error: true,
		helperText: 'Incorrect entry!' };

const NumberTextField = (context) => {
	const { props: { data: schema }, value, row, field } = context;
	const [numberValue, setValue]	= useState(value);
	const [error, setError] = useState(numberValidator(schema, value));

	return (
		<Input { ...{
			variant: 'standard',
			type: 'number',
			value: numberValue.toString(),
			onChange: ({ target: { value: number }}) => {
				const isNumber = numberValidator(schema, number);

				setError(isNumber);
				setValue((prev) => {
					const newValue = isNumber ? number : prev;

					row[field] = newValue;
					return newValue;
				});
			},
			InputProps: { disableUnderline: true },
			inputProps: transformSchema(schema),
			...errorMessage(error),
		} }
		/>
	);
};

export default NumberTextField;
