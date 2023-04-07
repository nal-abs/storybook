import { DesktopTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { React, useState } from 'react';

const transform = (event) => ({
	target: {
		value: event,
	},
});

const TimePicker = (context) => {
	const { params: { value }, variant, disableUnderline,
		onChange = (x) => x }	= context;
	const initialTime = value ? dayjs(`1/1/2022 ${ value }`) : null;
	const [time, setTime] = useState(initialTime);

	return <LocalizationProvider dateAdapter={ AdapterDayjs }>
		<DesktopTimePicker
			value={ time }
			onChange={ (event) => {
				setTime(event);
				return onChange(transform(event));
			} }
			slotProps={ { textField: { variant: variant,
				InputProps: { disableUnderline }}} }
		/></LocalizationProvider>;
};

export default TimePicker;
