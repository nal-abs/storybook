import React from 'react';
import SingleSelect from './SingleSelect';
import MultiSelect from './MultiSelect';
import FieldInput from './FieldInput';
import DefaultInput from './DefaultInput';
import { find } from '@laufire/utils/collection';
import RadioGroup from './RadioWrapper';
import Switch from './SwitchWrapper';
import CheckBoxGroup from './CheckboxGroupWrapper.js';
import Slider from './SliderWrapper';

const widgetList = {
	slider: Slider,
	checkboxGroup: CheckBoxGroup,
	radioGroup: RadioGroup,
	switch: Switch,
	select: SingleSelect,
	multiSelect: MultiSelect,
	dateTimePicker: FieldInput,
	timePicker: FieldInput,
	dateTime: FieldInput,
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
