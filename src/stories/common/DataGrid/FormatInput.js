import { TextField } from '@mui/material';
import { React, useState } from 'react';
import { identity, nothing } from '@laufire/utils/fn';
import buildEvent from '../buildEvent';
import validateType from './Validate';
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
	const { setUserInput, context: { schema, onChange = nothing },
		transform, validate } = props;

	setUserInput(newValue);
	validate(transform(newValue), schema)
			&& onChange(buildEvent(transform(newValue)));
};

const getClassName = (props) => {
	const { context: { schema }, userInput, transform, validate } = props;

	return validate(transform(userInput), schema)
		? ''
		: 'error';
};

const TextFieldProps = {
	variant: 'standard',
	InputProps: { disableUnderline: true },
};

const handleChange = (props) => ({ target: { value: newValue }}) => {
	const { context: { component }} = props;
	const inputValid = isInputValid[component] || identity;

	return inputValid(newValue)
			&& handleValidInput(props, newValue);
};

const FormatInput = (context) => {
	const { value = '', component } = context;
	const [userInput, setUserInput] = useState(value);
	const transform = transformValue[component] || identity;
	const validate = validateType[component] || identity;
	const props = { setUserInput, userInput, transform, validate, context };
	const buildInputProps = inputProps[component] || nothing;
	const extendedProps = { inputProps: buildInputProps(context) };

	return (
		<TextField { ...{
			...TextFieldProps,
			type: formatMap[component],
			className: getClassName(props),
			value: userInput,
			onChange: handleChange(props),
			...extendedProps,
		} }
		/>);
};

export default FormatInput;
