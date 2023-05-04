import SingleSelect from './SingleSelect';
import MultiSelect from './MultiSelect';
import FieldInput from './FieldInput';
import React from 'react';
import DefaultInput from './DefaultInput';
import { find } from '@laufire/utils/collection';

const getformatComponent = (format) => format && FieldInput;
const getTypeComponent = (type) => type && FieldInput;

const formatList = {};
const typeList = {};

const componentType = {
	multiSelect: ({ uniqueItems }) => uniqueItems && MultiSelect,
	singleSelect: ({ enum: Enum }) => Enum && SingleSelect,
	format: ({ format }) => formatList[format] || getformatComponent(format),
	type: ({ type }) => typeList[type] || getTypeComponent(type),
	default: () => DefaultInput,
};

const SchemaInput = (props) => {
	const { schema } = props;

	const Component = find(componentType, (component) =>
		component(schema))(schema);

	return <Component { ...props }/>;
};

export default SchemaInput;
