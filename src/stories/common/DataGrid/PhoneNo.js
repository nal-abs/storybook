import { TextField } from '@mui/material';
import { React, useState } from 'react';
import { nothing } from '@laufire/utils/fn';
import buildEvent from '../buildEvent';
import validatePhoneNumber from './validatePhoneNumber';

const PhoneNo = (context) => {
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
				validatePhoneNumber(schema, value)
				&& onChange(buildEvent(value));
			},
			...rest,
		} }
		/>);
};

export default PhoneNo;
