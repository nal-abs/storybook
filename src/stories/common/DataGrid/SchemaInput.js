import React from 'react';
import SingleSelect from './SingleSelect';
import MultiSelect from './MultiSelect';
import FieldInput from './FieldInput';
import DefaultInput from './DefaultInput';
import { find } from '@laufire/utils/collection';
import RadioGroup from './RadioWidget';
import Switch from './SwitchWidget';
import CheckBox from './CheckBoxWidget';
import CheckboxGroup from './CheckboxGroup';
import Slider from './SliderWidget';

const formatList = {};
const typeList = {
	boolean: CheckBox,
};
const widgetList = {
	slider: Slider,
	checkboxGroup: CheckboxGroup,
	radioGroup: RadioGroup,
	switch: Switch,
};

const componentType = {
	widget: ({ widget }) => widgetList[widget],
	uniqueItems: ({ uniqueItems }) => uniqueItems && MultiSelect,
	enum: ({ enum: Enum }) => Enum && SingleSelect,
	format: ({ format }) => formatList[format] || (format && FieldInput),
	type: ({ type }) => typeList[type] || (type && FieldInput),
	default: () => DefaultInput,
};

const SchemaInput = (props) => {
	const { schema } = props;
	const Component = find(componentType, (component) =>
		component(schema))(schema);

	return <Component { ...props }/>;
};

export default SchemaInput;
