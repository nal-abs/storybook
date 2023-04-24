import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { React, useState } from 'react';

const limits = ({ formatMinimum, formatMaximum }) => ({
	min: formatMinimum,
	max: formatMaximum,
});

const DateTimeTextField = (context) => {
	const { value: initialValue, schema } = context;
	const [date, setDate] = useState(dayjs(initialValue)
		.format('YYYY-MM-DDTHH:mm:ss'));

	return (
		<TextField { ...{
			variant: 'standard',
			value: date,
			onChange: ({ target: { value }}) => setDate(value),
			InputProps: { disableUnderline: true },
			type: 'datetime-local',
			inputProps: limits(schema),
			schema: schema,
		} }
		/>);
};

export default DateTimeTextField;
