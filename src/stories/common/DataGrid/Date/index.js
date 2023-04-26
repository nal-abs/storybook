import dayjs from 'dayjs';
import React, { useState } from 'react';
import Input from './Input';

const limits = ({ formatMinimum, formatMaximum }) => ({
	min: formatMinimum,
	max: formatMaximum,
});

const props = {
	type: 'date',
	variant: 'standard',
	InputProps: { disableUnderline: true },
};

const DateInput = (context) => {
	const { value: initialValue, row, field, schema } = context;

	const [value, setValue] = useState(dayjs(initialValue)
		.format('YYYY-MM-DD'));

	return (
		<Input { ...{
			...props,
			value: value,
			inputProps: limits(schema),
			schema: schema,
			onChange: ({ target: { value: newValue }}) => {
				row[field] = newValue;
				setValue(newValue);
			},
		} }
		/>);
};

export default DateInput;
