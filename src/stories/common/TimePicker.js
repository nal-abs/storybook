/* eslint-disable max-lines-per-function */
import { DesktopTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState, React } from 'react';

const TimePicker = (context) => {
	const { params: { value }, onChange = (x) => x }	= context;
	const [time, setTime] = useState(null);

	const handleChange = (event) => {
		setTime(event);
	};
	const transform = (event) => ({
		target: {
			value: event.$d,
		},
	});

	return <LocalizationProvider dateAdapter={ AdapterDayjs }>
		<DesktopTimePicker
			value={ value || time }
			onChange={ (event) => {
				handleChange(event);
				onChange(transform(event));
			} }
		/></LocalizationProvider>;
};

export default TimePicker;
