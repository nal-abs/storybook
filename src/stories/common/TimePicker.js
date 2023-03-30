import { DesktopTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState, React } from 'react';

const TimePicker = ({ value, onChange = (x) => x }) => {
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
		/>
	</LocalizationProvider>;
};

export default TimePicker;
