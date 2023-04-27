import { React, useState } from 'react';
import validate from './validate';
import { TextField } from '@mui/material';
import buildEvent from '../../buildEvent';

const regExp = /^-?(?:0|[1-9]\d*)?(?:\.?|\.\d*)$/;

const handleValidInput = (
	setUserInput, value, schema, onChange
) => {
	const number = Number(value);

	setUserInput(value);
	validate(number, schema)
		&& onChange(buildEvent(number));
};

const Input = (context) => {
	const { value = '', onChange = (x) => x, schema, ...rest } = context;
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
