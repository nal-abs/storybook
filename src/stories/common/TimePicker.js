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
	const { params: { value }, onChange = (x) => x }	= context;
	const initialTime = value ? dayjs(`1/1/2022 ${ value }`) : null;
	const [time, setTime] = useState(initialTime);
	const handleTime = (event) => {
		setTime(event);
	};

	return <LocalizationProvider dateAdapter={ AdapterDayjs }>
		<DesktopTimePicker
			value={ time }
			onChange={ (event) => {
				handleTime(event);
				return onChange(transform(event));
			} }
			slotProps={ { textField: { variant: 'standard',
				InputProps: { disableUnderline: true }}} }
		/></LocalizationProvider>;
};

export default TimePicker;
