import React from 'react';
import DefaultInput from './DefaultInput';
import { find } from '@laufire/utils/collection';
import CheckBoxGroup from './CheckboxGroupWrapper.js';
import SingleSelect from './component/SingleSelect';
import MultiSelect from './component/MultiSelect';
import FieldInput from './component/FieldInput';
import Switch from './component/SwitchWrapper'
import RadioGroup from './component/RadioWrapper'
import Slider from './component/SliderWrapper'

const widgetList = {
	slider: Slider,
	checkboxGroup: CheckBoxGroup,
	radioGroup: RadioGroup,
	switch: Switch,
	select: SingleSelect,
	multiSelect: MultiSelect,
	dateTimePicker: FieldInput,
	timePicker: FieldInput,
	datePicker: FieldInput,
	input: FieldInput,
};

const componentType = {
	widget: ({ widget }) => widgetList[widget],
	uniqueItems: ({ uniqueItems }) => uniqueItems && MultiSelect,
	enum: ({ enum: Enum }) => Enum && SingleSelect,
	format: ({ format }) => format && FieldInput,
	type: ({ type }) => type && FieldInput,
	default: () => DefaultInput,
};

const SchemaInput = (props) => {
	const { schema } = props;
	const Component = find(componentType, (component) =>
		component(schema))(schema);

	return <Component { ...props }/>;
};

export default SchemaInput;
