/* eslint-disable max-lines-per-function */
import { useState, React } from 'react';
import Input from '../Input';
import transformSchema from './IntegerTextField/transformSchema';
import validateNumber from './validateNumber';

const NumberTextField = (context) => {
	const { props: { data: schema }, value: initialValue,
		row, field } = context;
	const [state, setState]	= useState(initialValue);
	const [status, setStatus] = useState(validateNumber(schema, initialValue));

	return (
		<Input { ...{
			className: status ? '' : 'error',
			variant: 'standard',
			type: 'number',
			value: state,
			onChange: ({ target: { value }}) => {
				const number = Number(value);

				setStatus(validateNumber(schema, number));
				return setState((prev) => {
					const newValue = validateNumber(schema, number)
						? number
						: prev;

					row[field] = newValue;
				});
			},
			InputProps: { disableUnderline: true },
			inputProps: transformSchema(schema),
		} }
		/>
	);
};

export default NumberTextField;
