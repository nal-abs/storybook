/* eslint-disable max-lines-per-function */
import { useState, React } from 'react';
import Input from '../Input';
import validateInteger from './validateInteger';

const handleInteger = (
	{ target: { value }}, schema, prev
) => {
	const NumberValue = value === '' ? '' : Number(value);

	return validateInteger(NumberValue, schema)
	|| value === ''
		? NumberValue
		: prev;
};

const initialValue = (value) =>
	(Number.isInteger(value) ? value : parseInt(value, 10));

const IntegerTextField = (params) => {
	const { props: { data: schema }, value, field, row } = params;
	const { maximum, minimum, multipleOf } = schema;
	const [integerValue, setValue] = useState(initialValue(value));

	return (
		<Input { ...{
			variant: 'standard',
			type: 'number',
			value: integerValue,
			onChange: (event) => {
				setValue((prev) => {
					const newValue = handleInteger(
						event, schema, prev
					);

					row[field] = newValue;
					return newValue;
				});
			},
			InputProps: { ...{
				disableUnderline: true,
			}},
			inputProps: {
				min: minimum,
				max: maximum,
				step: multipleOf,
			},
		} }
		/>
	);
};

export default IntegerTextField;
