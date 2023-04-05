/* eslint-disable no-unused-vars */
/* eslint-disable max-lines-per-function */
import { peek } from '@laufire/utils/debug';
import { useState, React } from 'react';
import Input from '../Input';
import validateInteger from './validateInteger';

const handleInteger = (
	event, schema, prev
) => {
	const value = Number(event.target.value);

	return validateInteger(value, schema) ? value : prev;
};

const IntegerTextField = (params) => {
	const { props: { data: schema }, value, field, row } = params;

	const [integerValue, setValue] = useState(value);

	return (
		<Input { ...{
			variant: 'standard',
			value: integerValue,
			onChange: (event) => {
				row[field] = integerValue;
				setValue((prev) => handleInteger(
					event, schema, prev
				));
			},
			InputProps: { ...{
				disableUnderline: true,
			}},
		} }
		/>
	);
};

export default IntegerTextField;
