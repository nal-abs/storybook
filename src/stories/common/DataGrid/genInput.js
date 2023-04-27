import { identity, nothing } from '@laufire/utils/fn';
import { React, useState } from 'react';

const variant = 'standard';
const InputProps = { disableUnderline: true };

const genInput = ({ Component,
	buildInputProps = nothing, type,
	updateRow = identity }) => {
	const Input = (context) => {
		const { value: initialValue, schema, row, field } = context;
		const [value, setValue] = useState(initialValue);

		const onChange = ({ target: { value: newValue }}) => {
			row[field] = updateRow(newValue);

			return setValue(newValue);
		};
		const props = { value, variant, InputProps, schema, onChange };
		const extendedProps = { inputProps: buildInputProps(schema) };

		return <Component { ...{ ...props, ...extendedProps, type } }/>;
	};

	return Input;
};

export default genInput;
