import { React, useState } from 'react';
import { DesktopDatePicker as MuiDatePicker,
	LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const transform = (event) => ({
	target: {
		value: event.$d.toDateString(),
	},
});

const DatePicker = (context) => {
	const { value, onChange = (x) => x }	= context;
	const [date, setDate] = useState(value);

	return <LocalizationProvider dateAdapter={ AdapterDayjs }>
		<MuiDatePicker
			format="DD-MM-YYYY"
			value={ date }
			onChange={ (event) => {
				setDate(event);
				return onChange(transform(event));
			} }
		/>
	</LocalizationProvider>;
};

export default DatePicker;
