import { TextField } from '@mui/material';
import { React, useState } from 'react';
import { nothing } from '@laufire/utils/fn';
import buildEvent from '../../buildEvent';
import validate from './validate';

const regExp = /^(?:[0-]|-?([1-9]+[0-9]*)?)$/;

const handleValidInput = (
	setUserInput, value, schema, onChange
) => {
	const integer = Number(value);

	setUserInput(value);
	validate(integer, schema)
		&& onChange(buildEvent(integer));
};

const Input = (context) => {
	const { value = '', schema, onChange = nothing, ...rest } = context;
	const [userInput, setUserInput] = useState(value);

	return (
		<TextField { ...{
			className: validate(userInput, schema) ? '' : 'error',
			value: userInput,
			onChange: ({ target: { value: newValue }}) => {
				const isInputValid = regExp.test(newValue);

				return isInputValid && handleValidInput(
					setUserInput, newValue, schema, onChange
				);
			},
			...rest,
		} }
		/>);
};

export default Input;
