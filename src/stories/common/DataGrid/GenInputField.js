/* eslint-disable max-lines-per-function */
import { TextField } from '@mui/material';
import { React, useState } from 'react';
import { identity, nothing } from '@laufire/utils/fn';
import buildEvent from '../buildEvent';
import validate from './Validate';
import transformValue from './transformValue';
import isInputValid from './isInputValid';
import inputProps from './inputProps';

const formatMap = {
	'date-time': 'datetime-local',
	'date': 'date',
	'time': 'time',
	'phoneNo': 'phoneNo',
	'number': 'string',
	'integer': 'string',
};

const handleValidInput = (props, newValue) => {
	const { setUserInput, schema, parameter, onChange } = props;
	const transform = transformValue[parameter] || identity;

	setUserInput(newValue);
	validate[parameter](transform(newValue), schema)
			&& onChange(buildEvent(transform(newValue)));
};

const getClassName = (props) => {
	const { schema, parameter, userInput } = props;
	const transform = transformValue[parameter] || identity;

	return validate[parameter](transform(userInput), schema)
		? ''
		: 'error';
};

const TextFieldProps = {
	variant: 'standard',
	InputProps: { disableUnderline: true },
};

const GenInputField = (context) => {
	const { value = '', onChange = nothing, schema } = context;
	const { format, type } = schema;
	const parameter = format || type;

	const [userInput, setUserInput] = useState(value);
	const props = { setUserInput, schema, parameter, onChange, userInput };
	const buildInputProps = inputProps[parameter] || nothing;
	const extendedProps = { inputProps: buildInputProps(context) };

	return (
		<TextField { ...{
			...TextFieldProps,
			type: formatMap[parameter],
			className: getClassName(props),
			value: userInput,
			onChange: ({ target: { value: newValue }}) => {
				const inputValid = isInputValid[format] || identity;

				return inputValid(newValue)
				&& handleValidInput(props, newValue);
			},
			...extendedProps,
		} }
		/>);
};

export default GenInputField;
