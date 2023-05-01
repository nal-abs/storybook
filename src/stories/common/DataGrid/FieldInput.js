import { React, useState } from 'react';
import FormatInput from './FormatInput';
import updateRow from './updateRow';
import { identity } from '@laufire/utils/fn';

const FieldInput = (context) => {
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

	return <FormatInput { ...{ ...props, ...context } }/>;
};

export default FieldInput;
