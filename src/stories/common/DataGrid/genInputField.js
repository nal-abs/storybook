import { TextField } from '@mui/material';
import { React, useState } from 'react';
import { identity, nothing } from '@laufire/utils/fn';
import buildEvent from '../buildEvent';

const handleValidInput = (props, newValue) => {
	const { setUserInput, validate, transformValue, schema, onChange } = props;

	setUserInput(newValue);
	validate(transformValue(newValue), schema)
			&& onChange(buildEvent(transformValue(newValue)));
};

const getClassName = (props) => {
	const { validate, transformValue, schema, userInput } = props;

	return validate(transformValue(userInput), schema)
		? ''
		: 'error';
};

const genInputField = ({ validate, isInputValid = identity,
	transformValue = identity }) => {
	const Component = ({ value = '', onChange = nothing, schema, ...rest }) => {
		const [userInput, setUserInput] = useState(value);
		const props = {
			setUserInput, validate,
			transformValue, schema, onChange, userInput,
		};

		return (
			<TextField { ...{
				className: getClassName(props),
				value: userInput,
				onChange: ({ target: { value: newValue }}) =>
					isInputValid(newValue) && handleValidInput(props, newValue),
				...rest,
			} }
			/>);
	};

	return Component;
};

export default genInputField;
