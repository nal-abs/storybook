import { React, useState } from 'react';
import GenInputField from './GenInputField';
import updateRow from './updateRow';
import { identity } from '@laufire/utils/fn';

const Input = (context) => {
	const { value: initialValue, row, field,
		schema: { format, type }} = context;
	const component = format || type;
	const [value, setValue] = useState(initialValue);

	const onChange = ({ target: { value: newValue }}) => {
		const update = updateRow[component] || identity;

		row[field] = update(newValue);

		return setValue(newValue);
	};
	const props = { value, onChange, component };

	return <GenInputField { ...{ ...props, ...context } }/>;
};

export default Input;
