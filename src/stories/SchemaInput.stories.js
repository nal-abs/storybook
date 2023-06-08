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
	dateTime: '2018-06-12T19:30:55',
	color: '#523658',
	time: '13:30:00',
	date: '2022-07-07',
	number: 10,
	switch: false,
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
				'dateTime',
				'multiSelect',
				'checkBox',
				'slider',
				'password',
				'color',
				'time',
				'date',
				'number',
				'switch',
			],
		},
	},
};

export default component;

const Template = (args) => {
	const { schemaType = 'date' } = args;
	const jsonSchema = schema[schemaType];
	const value = defaultValue[schemaType];

	return (
		<SchemaInputComponent { ...{
			schema: jsonSchema,
			value: value,
		} }
		/>);
};

export const SchemaInput = Template.bind({});

SchemaInput.args = {};
