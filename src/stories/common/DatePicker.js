import { React, useState } from 'react';
import { DesktopDatePicker as MuiDatePicker,
	LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const transform = (event) => ({
	target: {
		value: event.$d.toDateString(),
	},
});

const DatePicker = (context) => {
	const { value, onChange = (x) => x,
		data: { formatMaximum, formatMinimum }}	= context;

	const [date, setDate] = useState(value);

	return <LocalizationProvider dateAdapter={ AdapterDayjs }>
		<MuiDatePicker
			format="DD-MM-YYYY"
			minDate={ dayjs(formatMinimum) }
			maxDate={ dayjs(formatMaximum) }
			value={ date }
			onChange={ (event) => {
				setDate(event);
				return onChange(transform(event));
			} }
		/>
	</LocalizationProvider>;
};

export default DatePicker;
