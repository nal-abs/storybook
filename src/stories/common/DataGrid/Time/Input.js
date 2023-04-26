/* eslint-disable max-lines-per-function */
import { TextField } from '@mui/material';
import { React, useState } from 'react';
import { nothing } from '@laufire/utils/fn';
import buildEvent from '../../buildEvent';
import validate from './validate';
import dayjs from 'dayjs';

const Input = ({
	value: initialValue, schema,
	onChange = nothing,
	...rest
}) => {
	const [userInput, setUserInput] = useState(initialValue);

	return (
		<TextField { ...{
			className: validate(userInput, schema) ? '' : 'error',
			value: userInput,
			onChange: ({ target: { value }}) => {
				const timeFormat = dayjs(`1/1/2000 ${ value }`).format('hh:mm:ss');

				setUserInput(timeFormat);
				validate(timeFormat, schema)
				&& onChange(buildEvent(timeFormat));
			},
			...rest,
		} }
		/>);
};

export default Input;
