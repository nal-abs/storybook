/* eslint-disable max-lines-per-function */
import { useState, React } from 'react';
import Input from '../../Input';
import transformSchema from './transformSchema';
import Ajv from 'ajv';

const isInteger = (value, schema) => {
	const convertedValue = value === '' ? value : Number(value);
	const ajv = new Ajv();
	const validate = ajv.compile(schema);

	const valid = validate(convertedValue);

	return valid;
};

const errorMessage = (error) => !error
	&& { error: true,
		helperText: 'Incorrect entry!' };

const getValidInteger = ({ event: { target: { value }}, schema, prev }) => {
	const validInteger = isInteger(value, schema) || !value
		? value
		: prev;

	return validInteger;
};

const IntegerTextField = ({ props: { data: schema }, value, row, field }) => {
	const [integerValue, setIntegerValue]	= useState(value);
	const [error, setError] = useState(isInteger(value, schema));

	return (
		<Input { ...{
			variant: 'standard',
			type: 'number',
			value: integerValue.toString(),
			onChange: (event) => {
				setError(isInteger(value, schema));
				setIntegerValue((prev) => {
					const newValue = getValidInteger({ event, schema, prev });

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

export default IntegerTextField;
