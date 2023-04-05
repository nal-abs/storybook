/* eslint-disable max-lines-per-function */
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
		} }
		/>
	);
};

export default IntegerTextField;
