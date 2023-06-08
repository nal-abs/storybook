import * as React from 'react';
import SchemaInputComponent from './common/DataGrid/SchemaInput';
import schema from './schema';

const defaultValue = {
	singleSelect: 'US',
	radioGroup: 'India',
	checkBoxGroup: ['US'],
	multiSelect: ['US'],
	checkBox: false,
	slider: 10,
	password: 'hai',
	input: '2018-06-12T19:30:55',
};

const component = {
	title: 'Components/SchemaInput',
	component: SchemaInputComponent,
	argTypes: {
		schemaType: {
			type: 'select',
			options: [
				'singleSelect',
				'radioGroup',
				'checkBoxGroup',
				'input',
				'multiSelect',
				'checkBox',
				'slider',
				'password',
				'custom',
			],
		},
		schema: {
			control: { type: 'object', value: {}},
			if: { arg: 'schemaType', eq: 'custom' },
		},
		value: {
			control: { type: 'object', value: {}},
			if: { arg: 'schemaType', eq: 'custom' },
		},
	},
};

export default component;

const Template = (args) => {
	const { schemaType = 'input' } = args;
	const jsonSchema = schema[schemaType] || {};
	const value = defaultValue[schemaType] || {};

	return (
		<SchemaInputComponent { ...{
			schema: jsonSchema,
			value: value,
			...args,
		} }
		/>);
};

export const SchemaInput = Template.bind({});

SchemaInput.args = {};
