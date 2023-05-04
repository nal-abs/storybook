import { useState, React } from 'react';
import Input from '../Input';
import updateRow from './updateRow';

const DefaultInput = (context) => {
	const [value, setValue] = useState('');

	return (
		<Input { ...{
			InputProps: { disableUnderline: true },
			variant: 'standard',
			onChange: ({ target: { value: newValue }}) => {
				updateRow({ ...context, value: newValue });
				return setValue(newValue);
			},
			value: value,
		} }
		/>);
};

export default DefaultInput;
