import React from 'react';
import MuiDataGrid from './common/DataGrid/index';

const component = {
	title: 'Display/DataGrid',
	component: MuiDataGrid,
};

export default component;

export const DataGrid = (args) => <MuiDataGrid { ...args }/>;

DataGrid.args = {
	value: [
		{
			id: 1,
			date: '2021-05-05',
			credit: 'Equity share capital',
			debit: 'ABS HDFC',
			amount: 50000,
			document: '1',
			notes: '-',
			country: 'US',
			oneOf: [],
			countries: [],
		},
		{
			id: 2,
			date: '2022-09-04',
			credit: 'ABS HDFC',
			debit: 'uber',
			amount: 249,
			document: 'S11669701',
			notes: '-',
			country: 'India',
			oneOf: [],
			countries: [],
		},
	],
	columns: {
		width: 80,
		editable: true,
		data: {
			properties: {
				date: {
					type: 'string',
					format: 'date',
					title: 'Date',
					formatMinimum: '2013-11-17',
					formatMaximum: '2023-06-06',
				},
				credit: {
					type: 'string',
					title: 'Credit',
				},
				debit: {
					type: 'string',
					title: 'Debit',
				},
				amount: {
					type: 'number',
					title: 'Amount',
				},
				document: {
					type: 'string',
					title: 'Document',
				},
				notes: {
					type: 'string',
					title: 'Notes',
				},
				country: {
					type: 'string',
					enum: ['India', 'Africa', 'US'],
				},
				countries: {
					type: 'array',
					uniqueItems: true,
					widget: 'checkboxGroup',
					items: {
						type: 'string',
						enum: ['India', 'Africa', 'US'],
					},
				},
				oneOf: {
					type: 'array',
					uniqueItems: true,
					items: {
						oneOf: [
							{
								const: 'US',
								title: 'US',
							},
							{
								const: 'India',
								title: 'India',
							},
							{
								const: 'China',
								title: 'China',
							},
						],
					},
					maxItems: 1,
				},
			},
		},
		actions: [
			{
				icon: 'Edit',
				action: 'editRow',
			},
			{
				icon: 'Delete',
				action: 'deleteRow',
			},
		],
	},
	style: {
		width: '100%',
		height: 300,
	},
};
