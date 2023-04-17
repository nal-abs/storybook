import { React, useState } from 'react';
import { DesktopDatePicker as MuiDatePicker,
	LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const transform = (event) => ({
	target: {
		value: event,
	},
});

const DatePicker = (context) => {
	const { value, onChange = (x) => x,
		data: { formatMaximum, formatMinimum }, ...rest }	= context;
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
			sx={ { '& fieldset': { border: 'none' }} }
			{ ...rest }
		/>
	</LocalizationProvider>;
};

export default DatePicker;
