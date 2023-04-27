import { TextField } from '@mui/material';
import { React, useState } from 'react';
import { nothing } from '@laufire/utils/fn';
import validate from './validate';
import buildEvent from '../../buildEvent';

const Input = (context) => {
	const { value = '', onChange = nothing, schema, ...rest } = context;
	const [userInput, setUserInput] = useState(value);

	return (
		<TextField { ...{
			className: validate(userInput, schema) ? '' : 'error',
			value: userInput,
			onChange: ({ target: { value: newValue }}) => {
				setUserInput(newValue);
				validate(newValue, schema)
				&& onChange(buildEvent(newValue));
			},
			...rest,
		} }
		/>);
};

export default Input;
