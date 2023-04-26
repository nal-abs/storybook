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
	const { value, row, field, schema } = context;

	const [date, setDate] = useState(dayjs(value).format('YYYY-MM-DD'));

	return (
		<Input { ...{
			...props,
			value: date,
			inputProps: limits(schema),
			schema: schema,
			onChange: (evt) => {
				row[field] = evt.target.value;
				setDate(evt.target.value);
			},
		} }
		/>);
};

export default DateInput;
