import { useState, React } from 'react';
import Input from '../Input';
import updateRow from './updateRow';

const DefaultInput = (context) => {
	const [value, setValue] = useState('');

	return (
		<Input { ...{
			InputProps: { disableUnderline: true },
			variant: 'standard',
			// Todo: I have seen that the onChange function is the same in some components, make that a helper function.
			onChange: ({ target: { value: newValue }}) => {
				updateRow({ ...context, value: newValue });
				setValue(newValue);
			},
			value: value,
		} }
		/>);
};

export default DefaultInput;
