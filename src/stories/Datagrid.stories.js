import React from 'react';
import DataGrid from '../stories/common/DataGrid/index';

export default {
	title: 'stories/Datagrid',
	component: DataGrid,
};

export const DatagridStories = (args) => <DataGrid { ...args }/>;

DatagridStories.args = {
	value: [
		{
			id: 1,
			date: 'Jul-22-2022',
			credit: 'Equity share capital',
			debit: 'ABS HDFC',
			amount: '50,000',
			document: '1',
			notes: '-',
			country: 'US',
			oneOf: [],
			countries: [],
		},
		{
			id: 2,
			date: 'Sep-24-2022',
			credit: 'ABS HDFC',
			debit: 'uber',
			amount: '249',
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
				countries: { type: 'array',
					uniqueItems: true,
					items: {
						type: 'string',
						enum: ['India', 'Africa', 'US'],
					}},
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
								const: 'china',
								title: 'China',
							},
						],
					},
				},
				actions: {
					type: 'actions',
					title: 'Actions',
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
