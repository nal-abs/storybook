import { React, useState } from 'react';
import transformSchema from './transformSchema';
import Integer from './Integer';

const IntegerTextField = (context) => {
	const { value: initialValue, schema, row, field } = context;
	const [integer, setInteger] = useState(parseInt(initialValue, 10));

	return (
		<Integer { ...{
			variant: 'standard',
			InputProps: { disableUnderline: true },
			value: integer,
			onChange: ({ target: { value }}) => {
				row[field] = value;

				return setInteger(value);
			},
			inputProps: transformSchema(schema),
			schema: schema,
		} }
		/>);
};

export default IntegerTextField;
