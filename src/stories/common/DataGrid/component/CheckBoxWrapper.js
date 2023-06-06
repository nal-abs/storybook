import { useState, React } from 'react';
import CheckBox from '../../CheckBox';
import handleChange from '../../helper/handleChange';
import buildEvent from '../../helper/buildEvent';
import { nothing } from '@laufire/utils/fn';

const Checkbox = (context) => {
	const { schema, value, onChange = nothing } = context;
	const [userInput, setUserInput] = useState(value);

	return (
		<CheckBox { ...{
			value: userInput,
			schema: schema,
			onChange: ({ target: { value: newValue }}) => {
				setUserInput(newValue);
				onChange(buildEvent(newValue));
			},
		} }
		/>);
};

const CheckBoxWrapper = (context) => {
	const { value: initialValue } = context;
	const [value, setValue] = useState(initialValue);
	const props = { context, setValue };

	return (
		<Checkbox { ...{
			onChange: ({ target: { value: newValue }}) =>
				handleChange(newValue, props),
			value: value,
			...context,
		} }
		/>);
};

export default CheckBoxWrapper;
