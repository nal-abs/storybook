import { React, useState } from 'react';
import { identity, nothing } from '@laufire/utils/fn';
import buildEvent from '../../buildEvent';
import transformValue from '../transformValue';
import isInputValid from '../isInputValid';
import inputProps from '../inputProps';
import validateType from '../validate';
import TextField from '../../Input';

const handleValidInput = (props, newValue) => {
	const { setUserInput, context: { validSchema, onChange = nothing },
		transform, validate } = props;

	setUserInput(newValue);
	validate(transform(newValue), validSchema)
			&& onChange(buildEvent(transform(newValue)));
};

const getClassName = (props) => {
	const { userInput, transform, validate, context: { validSchema }} = props;

	return validate(transform(userInput), validSchema)
		? ''
		: 'error';
};

const TextFieldProps = ({ readOnly, disabled }) => ({
	variant: 'standard',
	InputProps: { disableUnderline: true, ...readOnly && { readOnly: true },
		...disabled && { disabled: true }},
	sx: { width: '200px' },
});

const handleChange = (props) =>
	({ target: { value: newValue }}) => {
		const { context: { component }} = props;
		const inputValid = isInputValid[component] || identity;

		return inputValid(newValue)
			&& handleValidInput(props, newValue);
	};

const TextFieldWrapper = (context) => {
	const { value = '', component, schemaType, schema } = context;
	const [userInput, setUserInput] = useState(value);
	const transform = transformValue[component] || identity;
	const validate = validateType[component] || identity;
	const props = { setUserInput, userInput, transform, validate, context };
	const buildInputProps = inputProps[component] || nothing;
	const extendedProps = { inputProps: buildInputProps(context) };

	return (
		<TextField { ...{
			...TextFieldProps(schema),
			type: schemaType,
			className: getClassName(props),
			value: userInput,
			onChange: handleChange(props),
			...extendedProps,
		} }
		/>);
};

export default TextFieldWrapper;
