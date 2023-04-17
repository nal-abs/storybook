import { React, useState } from 'react';
import DatePicker from '../DatePicker';
import dayjs from 'dayjs';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const isDateValid = (value, schema) => {
	const date = value.$d.toDateString();
	const newValue = dayjs(date).format('YYYY-MM-DD');
	const ajv = new Ajv();

	const validate = addFormats(ajv).compile(schema);

	const valid = validate(newValue);

	return valid;
};

const updateRow = (newValue, { row, field }) => {
	const date = dayjs(newValue).format('YYYY-MM-DD');

	row[field] = date;
	return { date };
};

const DateField = (context) => {
	const { params: { value }, params,
		props: { data }} = context;
	const [date, setDate] = useState({ date: dayjs(value),
		isValid: isDateValid(dayjs(value), data) });

	return (
		<DatePicker { ...{
			className: date.isValid ? '' : 'error',
			data: data,
			onChange: ({ target: { value: newValue }}) => {
				const isValid = isDateValid(newValue, data);

				setDate({
					...date, isValid, ...isValid
						&& updateRow(newValue, params),
				});
			},
			value: date.date,
		} }
		/>);
};

export default DateField;
