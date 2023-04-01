import { useState, React } from 'react';
import TimePicker from '../TimePicker';

const TimeField = (params) => {
	const { row, field, value: initialValue } = params;
	const [value, setValue] = useState(initialValue);

	return (
		<TimePicker { ...{
			params: params,
			onChange: ({ target: { value: newValue }}) => {
				row[field] = newValue;
				return setValue(newValue);
			},
			value: value,
			variant: 'standard',
			disableUnderline: true,
		} }
		/>);
};

export default TimeField;
