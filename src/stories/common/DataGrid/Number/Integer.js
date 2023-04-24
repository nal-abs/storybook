import { TextField } from '@mui/material';
import { React, useState } from 'react';
import validateInteger from './validateInteger';
import { nothing } from '@laufire/utils/fn';
import buildEvent from '../buildEvent';

const regExp = /^(?:[0-]|-?([1-9]+[0-9]*)?)$/;

const handleValidInput = (
	setUserInput, value, schema, onChange
) => {
	const integer = Number(value);

	setUserInput(value);
	validateInteger(schema, integer)
		&& onChange(buildEvent(integer));
};

const Integer = (context) => {
	const {
		value: initialValue,
		onChange = nothing,
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

export default Integer;
