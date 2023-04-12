import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const isDateValid = (value, schema) => {
	const newValue = dayjs(value).format('YYYY-MM-DD');
	const ajv = new Ajv();

	const validate = addFormats(ajv).compile(schema);

	const valid = validate(newValue);

	return valid;
};
const limits = ({ formatMinimum, formatMaximum }) => ({
	min: formatMinimum,
	max: formatMaximum,
});
const error = (date, data) => (isDateValid(date, data)
	? { helperText: ' ' }
	: { error: true,
		helperText: 'Incorrect entry!' });

const DateTextField = (context) => {
	const { params: { value, row, field }, data } = context;

	const [date, setDate] = useState(dayjs(value).format('YYYY-MM-DD'));

	return (
		<TextField { ...{
			type: 'date',
			inputProps: limits(data),
			onChange: (evt) => {
				row[field] = evt.target.value;
				setDate(evt.target.value);
			},
			variant: 'standard',
			value: date,
			InputProps: { disableUnderline: true },
			...error(date, data),
		} }
		/>);
};

export default DateTextField;
