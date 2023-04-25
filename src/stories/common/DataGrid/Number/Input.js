import { React, useState } from 'react';
import validate from './validate';
import { TextField } from '@mui/material';
import buildEvent from '../../buildEvent';

const regExp = /^-?(?:0|[1-9]\d*)?(?:\.?|\.\d*)$/;

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
		value: initialValue,
		onChange = (x) => x,
		schema, ...rest
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
