import * as React from 'react';
import SchemaInputComponent from './common/DataGrid/SchemaInput';
import schema from './schema';

const defaultValue = {
	input: '2014-11-16T21:25:33',
	singleSelect: 'US',
	radioGroup: 'India',
	checkBoxGroup: ['US'],
	multiSelect: ['US'],
	checkBox: false,
	slider: 10,
	password: 'hai',
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
			],
		},
		schema: {
			control: { type: 'object', value: schema.singleSelect },
			if: { arg: 'schemaType', eq: 'singleSelect' },
		},
		value: {
			control: { type: 'object', value: defaultValue.singleSelect },
			if: { arg: 'schemaType', eq: 'singleSelect' },
		},
	},
};

export default component;

const Template = (args) => {
	const { schemaType = 'input' } = args;
	const jsonSchema = schema[schemaType];
	const value = defaultValue[schemaType];

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
