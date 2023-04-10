import { useState, React } from 'react';
import Input from '../../Input';
import transformSchema from './transformSchema';
import Ajv from 'ajv';

const isInteger = (value, schema) => {
	const ajv = new Ajv();
	const validate = ajv.compile(schema);

	const valid = validate(value);

	return valid;
};

const getValidInteger = ({ event: { target: { value }}, schema, prev }) => {
	const convertedValue = value === '' ? value : Number(value);

	const validInteger = isInteger(convertedValue, schema) || !value
		? convertedValue
		: prev;

	return validInteger;
};

const IntegerTextField = ({ props: { data: schema }, value, row, field }) => {
	const [integerValue, setIntegerValue]	= useState(parseInt(value, 10));

	return (
		<Input { ...{
			variant: 'standard',
			type: 'number',
			value: integerValue.toString(),
			onChange: (event) => {
				setIntegerValue((prev) => {
					const newValue = getValidInteger({ event, schema, prev });

					row[field] = newValue;
					return newValue;
				});
			},
			InputProps: { disableUnderline: true },
			inputProps: transformSchema(schema),
		} }
		/>
	);
};

export default IntegerTextField;
