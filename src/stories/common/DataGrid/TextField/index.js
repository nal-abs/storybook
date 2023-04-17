import { useState, React } from 'react';
import transformSchema from './transformSchema';
import Input from '../../Input';

const updateRow = (value, { row, field }) => {
	row[field] = value;
	return { value };
};

const props = {
	variant: 'standard',
	type: 'number',
	InputProps: { disableUnderline: true },
};

const TextField = (context) => {
	const { schema, value: initialValue, validate } = context;
	const [state, setState]	= useState({ value: initialValue,
		isValid: validate(schema, initialValue) });

	return (
		<Input { ...{
			className: state.isValid ? '' : 'error',
			...props,
			value: state.value,
			onChange: ({ target: { value }}) => {
				const number = Number(value);
				const isValid = validate(schema, number);

				setState({ ...state, isValid,
					...isValid && updateRow(number, context) });
			},
			inputProps: transformSchema(schema),
		} }
		/>
	);
};

export default TextField;
