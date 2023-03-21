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
			actions: {
				type: 'actions',
				format: 'actions',
				actions: 'Notes',
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
		},
	},
};

export default config;
