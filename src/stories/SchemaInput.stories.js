import * as React from 'react';
import JsonInput from './common/DataGrid/SchemaInput';
import { peek } from '@laufire/utils/debug';

const component = {
	title: 'Component/SchemaInput',
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
	onChange: (evt) => peek(evt.target.value),
};
