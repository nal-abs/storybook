import dayjs from 'dayjs';
import { React, useState } from 'react';
import DateTime from './DateTime';

const limits = ({ formatMinimum, formatMaximum }) => ({
	min: formatMinimum,
	max: formatMaximum,
});

const DateTimeTextField = (context) => {
	const { value: initialValue, row, field, schema } = context;
	const [date, setDate] = useState(dayjs(initialValue)
		.format('YYYY-MM-DDTHH:mm:ss'));

	return (
		<DateTime { ...{
			variant: 'standard',
			value: date,
			onChange: ({ target: { value }}) => {
				row[field] = `${ value }.000Z`;

				return setDate(value);
			},
			InputProps: { disableUnderline: true },
			type: 'datetime-local',
			inputProps: limits(schema),
			schema: schema,
		} }
		/>);
};

export default DateTimeTextField;
