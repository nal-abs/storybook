import { useState, React } from 'react';
import Select from '../../Select';
import handleChange from '../../handleChange';

const getInputProps = (schema) => {
	const { readOnly, disabled } = schema;

	return { inputProps: { readOnly, disabled }};
};
const SingleSelect = (context) => {
	const { schema, value: initialValue = '' } = context;
	const [value, setValue] = useState(initialValue);
	const props = { context, setValue };

	return (
		<Select { ...{
			options: schema.enum,
			sx: { width: '150px' },
			disableUnderline: true,
			variant: 'standard',
			onChange: ({ target: { value: newValue }}) =>
				handleChange(newValue, props),
			value: value,
			schema: schema,
			...getInputProps(schema),
		} }
		/>);
};

export default SingleSelect;
