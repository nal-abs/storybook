import SingleSelect from './SingleSelect';
import MultiSelect from './MultiSelect';
import FieldInput from './FieldInput';
import React from 'react';
import DefaultInput from './DefaultInput';
import { find } from '@laufire/utils/collection';
import RadioGroup from './RadioWidget';
import Switch from './SwitchWidget';
import CheckBox from './CheckBoxWidget';
import CheckboxGroup from './CheckboxGroup';

const getformatComponent = (format) => format && FieldInput;
const getTypeComponent = (type) => type && FieldInput;

const formatList = {};
const typeList = {
	boolean: CheckBox,
};
const widgetList = {
	checkboxGroup: CheckboxGroup,
	radioGroup: RadioGroup,
	switch: Switch,
};

const componentType = {
	widget: ({ widget }) => widgetList[widget],
	uniqueItems: ({ uniqueItems }) => uniqueItems && MultiSelect,
	enum: ({ enum: Enum }) => Enum && SingleSelect,
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
