import { TextField } from '@mui/material';
import { React, useState } from 'react';
import { nothing } from '@laufire/utils/fn';
import validate from './validate';
import buildEvent from '../../buildEvent';

const Input = (context) => {
	const {
		value: initialValue = '',
		onChange = nothing,
		schema,
		...rest
	} = context;
	const [userInput, setUserInput] = useState(initialValue);

	return (
		<TextField { ...{
			value: userInput,
			onChange: ({ target: { value }}) => {
				setUserInput(value);
				validate(schema, value)
				&& onChange(buildEvent(value));
			},
			...rest,
		} }
		/>);
};

export default Input;
