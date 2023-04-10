import { React, useState } from 'react';
import DatePicker from '../DatePicker';
import dayjs from 'dayjs';

const DateField = (params) => {
	const { row, field, value: initialValue } = params;
	const [value, setValue] = useState(dayjs(initialValue));

	return (
		<DatePicker { ...{
			onChange: ({ target: { value: newValue }}) => {
				row[field] = dayjs(newValue)
					.format('YYYY-MM-DD');
				return setValue(newValue);
			},
			value: value,
		} }
		/>);
};

export default DateField;
