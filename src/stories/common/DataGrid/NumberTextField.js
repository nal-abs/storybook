/* eslint-disable max-lines-per-function */
import { useState, React } from 'react';
import Ajv from 'ajv';
import Input from '../Input';
import transformSchema from './IntegerTextField/transformSchema';

const isNumber = (value, schema) => {
	const convertedValue = value === '' ? value : Number(value);
	const ajv = new Ajv();
	const validate = ajv.compile(schema);

	const valid = validate(convertedValue);

	return valid;
};

const errorMessage = (error) => !error
	&& { error: true,
		helperText: 'Incorrect entry!' };

const NumberTextField = ({ props: { data: schema }, value, row, field }) => {
	const [numberValue, setValue]	= useState(value);
	const [error, setError] = useState(false);

	return (
		<Input { ...{
			variant: 'standard',
			type: 'number',
			value: numberValue.toString(),
			onChange: ({ target: { value: number }}) => {
				setError(isNumber(number, schema));
				setValue((prev) => {
					const newValue = isNumber(number, schema)
						? number
						: prev;

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
