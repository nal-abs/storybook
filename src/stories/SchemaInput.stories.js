import * as React from 'react';
import JsonInput from './common/DataGrid/SchemaInput';
import { peek } from '@laufire/utils/debug';

const component = {
	title: 'Component/SchemaInput',
	component: JsonInput,
};

export default component;

const Template = (args) => <JsonInput { ...args }/>;

export const SchemaInput = Template.bind({});

SchemaInput.args = {
	schema: {
		type: 'string',
		format: 'date',
		title: 'Date',
		formatMinimum: '2013-11-17',
		formatMaximum: '2023-06-06',
	},
	value: '2022-05-05',
	onChange: (evt) => peek(evt.target.value),
};
