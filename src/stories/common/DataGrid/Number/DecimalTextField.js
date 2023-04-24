import { useState, React } from 'react';
import Decimal from './Decimal';
import transformSchema from './transformSchema';

const props = {
	variant: 'standard',
	InputProps: { disableUnderline: true },
};

const DecimalTextField = (context) => {
	const { schema, value: initialValue, row, field } = context;
	const [state, setState]	= useState(initialValue);

	return (
		<Decimal { ...{
			...props,
			value: state,
			onChange: ({ target: { value }}) => {
				row[field] = value;
				setState(value);
			},
			schema: schema,
			inputProps: transformSchema(schema),
		} }
		/>
	);
};

export default DecimalTextField;
