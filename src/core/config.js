const config = {
	milliseconds: 8000,
	TabItems: [
		{
			label: 'TodoPane',
			component: 'item1',
		},
		{
			label: 'TaskPane',
			component: 'item2',
		},
	],
	journals: {
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
				minimum: -50,
				maximum: 10,
				multipleOf: 0.2,
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
				widget: 'checkbox',
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
		},
	},
	ledgers: {
		properties: {
			ledger: {
				type: 'string',
				title: 'Ledger',
			},
			type: {
				type: 'string',
				title: 'Type',
			},
			accountType: {
				type: 'string',
				title: 'AccountType',
			},
			balances: {
				type: 'number',
				title: 'Balances',
			},
			notes: {
				type: 'string',
				title: 'Notes',
			},
			isActive: {
				type: 'boolean',
				title: 'IsActive',
			},
			dateTime: {
				type: 'string',
				format: 'date-time',
				title: 'DateTime',
				formatMinimum: '2000-10-06T22:22:55',
				formatMaximum: '2014-11-16T21:25:33',
			},
			time: {
				type: 'string',
				format: 'time',
				title: 'Time',
				formatMaximum: '22:30:00',
				formatMinimum: '10:00:00',
			},
			integer: {
				type: 'integer',
				title: 'Integer',
				maximum: 50,
				minimum: -50,
				multipleOf: 1,
			},
			phoneNo: {
				type: 'string',
				format: 'phoneNo',
				title: 'phoneNo',
			},
		},
	},
	columns: [
		{
			Header: 'Name',
			accessor: 'name',
		},
		{
			Header: 'Age',
			accessor: 'age',
		},
		{
			Header: 'Email',
			accessor: 'email',
		},
	],
	rows: [
		{
			name: 'John Doe',
			age: 32,
			email: 'john.doe@example.com',
		},
		{
			name: 'Jane Smith',
			age: 25,
			email: 'jane.smith@example.com',
		},
	],
	itemTypes: {
		column: 'column',
		row: 'row',
	},
};

export default config;
