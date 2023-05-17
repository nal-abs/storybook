import { useState, React } from 'react';
import updateRow from './updateRow';
import Switch from '../Switch';

const SwitchWidget = (context) => {
	const { value: initialValue } = context;
	const [value, setValue] = useState(initialValue);

	return (
		<Switch { ...{
			onChange: ({ target: { value: newValue }}) => {
				updateRow({ ...context, value: newValue });
				setValue(newValue);
			},
			value: value,
		} }
		/>);
};

export default SwitchWidget;
