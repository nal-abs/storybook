import { React, useState } from 'react';
import TextFieldWrapper from './TextFieldWrapper.js';
import { identity } from '@laufire/utils/fn';
import updateValue from './updateValue';
import updateRow from './updateRow';

const formatMap = {
	'date-time': 'datetime-local',
	'date': 'date',
	'time': 'time',
	'phoneNo': 'phoneNo',
};

const typeMap = {
	number: 'string',
	integer: 'string',
};

const FieldInput = (context) => {
	const {
		value: initialValue,
		schema: { format, type },
	} = context;
	const component = format || type;
	const schemaType = formatMap[format] || typeMap[type];
	const [value, setValue] = useState(initialValue);
	const update = updateValue[component] || identity;

	const onChange = ({ target: { value: newValue }}) => {
		updateRow({ ...context, value: update(newValue) });

		setValue(newValue);
	};
	const props = { value, onChange, component, schemaType };

	return <TextFieldWrapper { ...{ ...props, ...context } }/>;
};

export default FieldInput;
