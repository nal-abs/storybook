import { useState, React } from 'react';
import MuiSwitch from '../../Switch';
import handleChange from '../../helper/handleChange';
import buildEvent from '../../helper/buildEvent';
import { nothing } from '@laufire/utils/fn';

const Switch = (context) => {
	const { value, onChange = nothing } = context;
	const [userInput, setUserInput] = useState(value);

	return (
		<MuiSwitch { ...{
			checked: userInput,
			onChange: ({ target: { value: newValue }}) => {
				setUserInput(newValue);
				onChange(buildEvent(newValue));
			},
		} }
		/>);
};

const SwitchWrapper = (context) => {
	const { value: initialValue } = context;
	const [value, setValue] = useState(initialValue);
	const props = { context, setValue };

	return (
		<Switch { ...{
			onChange: ({ target: { value: newValue }}) =>
				handleChange(newValue, props),
			value: value,
			...context,
		} }
		/>);
};

export default SwitchWrapper;
