/* eslint-disable react/display-name */
import { React, useState } from 'react';
import Input from '../DataGrid/Integer/Input';

const props = {
	variant: 'standard',
	InputProps: { disableUnderline: true },
};

const genInput = (context) => {
	const { value: initialValue, schema, row, field } = context;

	return ({ extendedProps, transform }) => {
		const [value, setValue] = useState(initialValue);

		return (
			<Input { ...{
				...props,
				...extendedProps,
				value: value,
				schema: schema,
				onChange: ({ target: { value: newValue }}) => {
					row[field] = transform(newValue);

					return setValue(newValue);
				},
			} }
			/>);
	};
};

export default genInput;
