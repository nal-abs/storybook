/* eslint-disable max-lines-per-function */
import { TextField } from '@mui/material';
import { React, useState } from 'react';
import { nothing } from '@laufire/utils/fn';
import validate from './validate';
import buildEvent from '../../buildEvent';
import dayjs from 'dayjs';

const Input = (context) => {
	const {
		value: initialValue,
		onChange = nothing,
		schema, ...rest
	} = context;
	const [userInput, setUserInput] = useState(initialValue);

	return (
		<TextField { ...{
			className: validate(userInput, schema) ? '' : 'error',
			value: userInput,
			onChange: ({ target: { value }}) => {
				const newValue = dayjs(value).format('YYYY-MM-DD');

				setUserInput(value);
				validate(newValue, schema)
					&& onChange(buildEvent(newValue));
			},
			...rest,
		} }
		/>);
};

export default Input;
