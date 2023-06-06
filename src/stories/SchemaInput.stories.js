import * as React from 'react';
import JsonInput from './common/DataGrid/SchemaInput';

const component = {
	title: 'Components/SchemaInput',
	component: JsonInput,
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
	},
};

export default component;

const Template = (args) => <JsonInput { ...args }/>;

export const SchemaInput = Template.bind({});

SchemaInput.args = {
	schema: {
		type: 'boolean',
		title: 'IsActive',
		widget: 'switch',
	},
	value: false,
};
