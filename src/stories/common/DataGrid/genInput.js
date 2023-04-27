import { React, useState } from 'react';

const variant = 'standard';
const InputProps = { disableUnderline: true };

const genInput = ({ input: InputComponent, inputProps }) => {
	const Component = (context) => {
		const { value: initialValue, schema, row, field } = context;
		const [value, setValue] = useState(initialValue);

		const onChange = ({ target: { value: newValue }}) => {
			row[field] = newValue;

			return setValue(newValue);
		};
		const props = { value, variant, InputProps, schema, onChange };
		const extendedProps = inputProps && { inputProps: inputProps(schema) };

		return <InputComponent { ...{ ...props, ...extendedProps } }/>;
	};

	return Component;
};

export default genInput;
