import { React, useState } from 'react';
import TextFieldWrapper from './TextFieldWrapper.js';
import { identity } from '@laufire/utils/fn';
import updateValue from './updateValue.js';
import updateRow from './updateRow.js';
import CheckBox from './CheckBoxWrapper.js';
import { omit } from '@laufire/utils/collection.js';

const formatList = {};
const typeList = {
	boolean: CheckBox,
};

const getComponent = (schema) => {
	const { format, type } = schema;
	const Component = formatList[format] || typeList[type] || TextFieldWrapper;

	return Component;
};

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
		schema: { format, type }, schema,
	} = context;
	const component = format || type;
	const schemaType = formatMap[format] || typeMap[type];
	const [value, setValue] = useState(initialValue);
	const update = updateValue[component] || identity;
	const validSchema = omit(schema, { something: 'widget' });
	const onChange = ({ target: { value: newValue }}) => {
		updateRow({ ...context, value: update(newValue) });

		setValue(newValue);
	};
	const props = { value, onChange, component, schemaType, validSchema };
	const Component = getComponent(schema);

	return <Component { ...{ ...props, ...context } }/>;
};

export default FieldInput;
