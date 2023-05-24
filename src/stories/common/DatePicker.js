import { React, useState } from 'react';
import { DesktopDatePicker as MuiDatePicker,
	LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import buildEvent from './buildEvent';
import { nothing } from '@laufire/utils/fn';

const DatePicker = (context) => {
	const {
		value: initialDate, onChange = nothing,
		data: { formatMaximum, formatMinimum }, ...rest
	}	= context;
	const [date, setDate] = useState(initialDate);

	return <LocalizationProvider dateAdapter={ AdapterDayjs }>
		<MuiDatePicker
			format="DD-MM-YYYY"
			minDate={ dayjs(formatMinimum) }
			maxDate={ dayjs(formatMaximum) }
			value={ date }
			onChange={ (value) => {
				setDate(value);
				return onChange(buildEvent(value));
			} }
			sx={ { '& fieldset': { border: 'none' }} }
			{ ...rest }
		/></LocalizationProvider>;
};

export default DatePicker;
