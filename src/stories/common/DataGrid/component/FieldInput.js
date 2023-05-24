import { React, useState } from 'react';
import { identity } from '@laufire/utils/fn';
import { find, omit } from '@laufire/utils/collection.js';
import CheckBox from './CheckBoxWrapper';
import TextFieldWrapper from './TextFieldWrapper';
import updateRow from '../updateRow';
import updateValue from '../updateValue';

const formatList = {};
const typeList = {
	boolean: CheckBox,
};

const componentType = {
	format: ({ format }) => formatList[format],
	type: ({ type }) => typeList[type],
	default: () => TextFieldWrapper,
};

const getComponent = (schema) => find(componentType, (component) =>
	component(schema))(schema);

const formatMap = {
	'date-time': 'datetime-local',
	'date': 'date',
	'time': 'time',
	'phoneNo': 'tel',
};

const typeMap = {
	number: 'string',
	integer: 'string',
};
const widgetMap = {
	color: 'color',
	password: 'password',
};

const getType = ({ widget, format, type }) =>
	widgetMap[widget] || formatMap[format] || typeMap[type];

const FieldInput = (context) => {
	const {
		value: initialValue,
		schema: { format, type }, schema,
	} = context;
	const component = format || type;
	const schemaType = getType(schema);
	const [value, setValue] = useState(initialValue);
	const update = updateValue[component] || identity;
	const validSchema = omit(schema, { something: 'widget',
		disabled: 'disabled' });
	const onChange = ({ target: { value: newValue }}) => {
		updateRow({ ...context, value: update(newValue) });

		setValue(newValue);
	};
	const props = { value, onChange, component, schemaType, validSchema };
	const Component = getComponent(schema);

	return <Component { ...{ ...props, ...context } }/>;
};

export default FieldInput;
