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
	validate(schema, integer)
		&& onChange(buildEvent(integer));
};

const Input = (context) => {
	const {
		value: initialValue, schema,
		onChange = nothing,
		...rest
	} = context;
	const [userInput, setUserInput] = useState(initialValue);

	return (
		<TextField { ...{
			value: userInput,
			onChange: ({ target: { value }}) => {
				const isInputValid = regExp.test(value);

				return isInputValid && handleValidInput(
					setUserInput, value, schema, onChange
				);
			},
			...rest,
		} }
		/>);
};

export default Input;
