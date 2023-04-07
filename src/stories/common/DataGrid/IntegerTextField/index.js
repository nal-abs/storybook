import { useState, React } from 'react';
import Input from '../../Input';
import transformSchema from './transformSchema';
import isInteger from '../isInteger';

const updateInteger = ({ setValue, event, params }) => {
	const { row, field, props: { data: schema }} = params;
	const { target: { value }} = event;
	const number = value === '' ? value : Number(value);

	setValue((prev) => {
		const validInteger = isInteger(number, schema) || !value
			? number
			: prev;

		row[field] = validInteger;
		return validInteger;
	});
};

const IntegerTextField = (params) => {
	const { props: { data: schema }, value } = params;
	const [integerValue, setValue]
	= useState(parseInt(value, 10));

	return (
		<Input { ...{
			variant: 'standard',
			type: 'number',
			value: integerValue.toString(),
			onChange: (event) => {
				updateInteger({ setValue, event, params });
			},
			InputProps: { disableUnderline: true },
			inputProps: transformSchema(schema),
		} }
		/>
	);
};

export default IntegerTextField;
