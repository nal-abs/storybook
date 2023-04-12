/* eslint-disable no-unused-vars */
/* eslint-disable max-lines-per-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import { peek } from '@laufire/utils/debug';
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

const DateTextField = (context) => {
	const { params: { value, row, field }, data,
		data: { formatMaximum, formatMinimum }} = context;

	const [date, setDate] = useState(dayjs(value).format('YYYY-MM-DD'));

	const error = isDateValid(date, data)
		? { helperText: ' ' }
		: { error: true,
			helperText: 'Incorrect entry!' };

	return (
		<TextField { ...{
			type: 'date',
			inputProps: {
				min: formatMinimum,
				max: formatMaximum,
			},
			onChange: (evt) => {
				row[field] = evt.target.value;
				setDate(evt.target.value);
			},
			variant: 'standard',
			value: date,
			InputProps: { disableUnderline: true },
			...error,
		} }
		/>);
};

export default DateTextField;
