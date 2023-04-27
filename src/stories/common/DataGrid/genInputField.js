/* eslint-disable max-lines-per-function */
import { TextField } from '@mui/material';
import { React, useState } from 'react';
import { identity, nothing } from '@laufire/utils/fn';
import buildEvent from '../buildEvent';

const genInputField = ({ validate, isInputValid = identity,
	transformValue = identity }) => {
	const Component = (context) => {
		const { value = '', onChange = nothing, schema, ...rest } = context;
		const [userInput, setUserInput] = useState(value);
		const handleValidInput = (newValue) => {
			setUserInput(newValue);
			validate(transformValue(newValue), schema)
						&& onChange(buildEvent(transformValue(newValue)));
		};

		return (
			<TextField { ...{
				className: validate(transformValue(userInput), schema)
					? ''
					: 'error',
				value: userInput,
				onChange: ({ target: { value: newValue }}) => {
					isInputValid(newValue) && handleValidInput(newValue);
				},
				...rest,
			} }
			/>);
	};

	return Component;
};

export default genInputField;
