/* eslint-disable max-lines-per-function */
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

const getValidInteger = ({ convertedValue, schema, prev }) => {
	const validInteger = isInteger(convertedValue, schema) || !convertedValue
		? convertedValue
		: prev;

	return validInteger;
};

const IntegerTextField = ({ props: { data: schema }, value, row, field }) => {
	const [integerValue, setIntegerValue]	= useState(value);
	const [className, setClassName] = useState(isInteger(value, schema));

	return (
		<Input { ...{
			className: className ? '' : 'error',
			variant: 'standard',
			type: 'number',
			value: integerValue,
			onChange: (event) => {
				const convertedValue = Number(event.target.value);

				setClassName(isInteger(convertedValue, schema));
				setIntegerValue((prev) => {
					const newValue = getValidInteger({ convertedValue,
						schema, prev });

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
