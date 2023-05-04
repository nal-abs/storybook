import { React, useState } from 'react';
import FormatInput from './FormatInput';
import { identity } from '@laufire/utils/fn';
import updateValue from './updateValue';
import updateRow from './updateRow';

const FieldInput = (context) => {
	const {
		value: initialValue,
		schema: { format, type },
	} = context;
	const component = format || type;
	const [value, setValue] = useState(initialValue);
	const update = updateValue[component] || identity;

	const onChange = ({ target: { value: newValue }}) => {
		updateRow({ ...context, value: update(newValue) });

		setValue(newValue);
	};
	const props = { value, onChange, component };

	return <FormatInput { ...{ ...props, ...context } }/>;
};

export default FieldInput;
