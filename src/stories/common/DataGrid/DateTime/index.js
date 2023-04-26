import dayjs from 'dayjs';
import { React, useState } from 'react';
import Input from './Input';

const limits = ({ formatMinimum, formatMaximum }) => ({
	min: formatMinimum,
	max: formatMaximum,
});

const props = {
	InputProps: { disableUnderline: true },
	type: 'datetime-local',
	variant: 'standard',
};
const DateTimeInput = (context) => {
	const { value: initialValue, row, field, schema } = context;
	const [value, setValue] = useState(dayjs(initialValue)
		.format('YYYY-MM-DDTHH:mm:ss'));

	return (
		<Input { ...{
			...props,
			value: value,
			inputProps: limits(schema),
			schema: schema,
			onChange: ({ target: { value: newValue }}) => {
				row[field] = `${ newValue }.000Z`;

				return setValue(newValue);
			},
		} }
		/>);
};

export default DateTimeInput;
