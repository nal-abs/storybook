import { TextField } from '@mui/material';
import { React, useState } from 'react';
import { nothing } from '@laufire/utils/fn';
import buildEvent from '../buildEvent';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const validateDateTime = (value, schema) => {
	const ajv = new Ajv();

	const validate = addFormats(ajv).compile(schema);

	const valid = validate(value);

	return valid;
};

const DateTime = (context) => {
	const {
		value: initialValue,
		onChange = nothing,
		schema, ...rest
	} = context;
	const [userInput, setUserInput] = useState(initialValue);

	return (
		<TextField { ...{
			className: validateDateTime(userInput, schema) ? '' : 'error',
			value: userInput,
			onChange: ({ target: { value }}) => {
				setUserInput(value);
				validateDateTime(value, schema)
					&& onChange(buildEvent(value));
			},
			...rest,
		} }
		/>);
};

export default DateTime;
