/* eslint-disable max-lines-per-function */
import { useState, React } from 'react';
import transformSchema from './transformSchema';
import Input from '../../Input';

const TextField = (context) => {
	const { schema, value: initialValue, row, field, validate } = context;
	const [state, setState]	= useState(initialValue);
	const [status, setStatus] = useState(validate(schema, initialValue));

	return (
		<Input { ...{
			className: status ? '' : 'error',
			variant: 'standard',
			type: 'number',
			value: state,
			onChange: ({ target: { value }}) => {
				const number = Number(value);

				setStatus(validate(schema, number));
				validate(schema, number) && setState(() => {
					row[field] = number;
					return number;
				});
			},
			InputProps: { disableUnderline: true },
			inputProps: transformSchema(schema),
		} }
		/>
	);
};

export default TextField;
