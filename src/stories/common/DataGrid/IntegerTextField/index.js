/* eslint-disable max-lines-per-function */
import { useState, React } from 'react';
import Input from '../../Input';
import transformSchema from './transformSchema';
import validateInteger from '../validateInteger';

const IntegerTextField = ({ props: { data: schema },
	value: initialValue, row, field }) => {
	const [state, setState]	= useState(initialValue);
	const [status, setStatus] = useState(validateInteger(initialValue, schema));

	return (
		<Input { ...{
			className: status ? '' : 'error',
			variant: 'standard',
			type: 'number',
			value: state,
			onChange: (event) => {
				const number = Number(event.target.value);

				setStatus(validateInteger(number, schema));
				setState((prev) => {
					const newValue = validateInteger(number, schema)
						? number
						: prev;

					row[field] = newValue;
					return newValue;
				});
			},
			InputProps: { disableUnderline: true },
			inputProps: transformSchema(schema),
		} }
		/>
	);
};

export default IntegerTextField;
