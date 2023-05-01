import { React } from 'react';
import ReactTable from './common/reactTable';
import config from '../core/config';
import seed from '../core/seed';

const component = {
	title: 'Display/Table',
	component: ReactTable,
};

export default component;

const Template = (args) => <ReactTable { ...args }/>;

const actions = [
	{
		icon: 'Edit',
		action: 'editRow',
	},
	{
		icon: 'Delete',
		action: 'deleteRow',
	},
];

export const Table = Template.bind({});

Table.args = {
	value: seed.ledgers,
	schema: config.ledgers.properties,
	actions: actions,
};
