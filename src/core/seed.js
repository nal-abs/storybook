const seed = {
	loading: false,
	tab: 'TodoPane',
	open: {
		left: false,
		right: false,
		bottom: false,
		top: false,
	},
	anchor: 'left',
	journals: [
		{
			id: 1,
			date: 'Jul-22-2022',
			credit: 'Equity share capital',
			debit: 'ABS HDFC',
			amount: '50,000',
			document: '1',
			notes: '-',
			name: 'nachu',
		},
		{
			id: 2,
			date: 'Sep-24-2022',
			credit: 'ABS HDFC',
			debit: 'uber',
			amount: '249',
			document: 'S11669701',
			notes: '-',
			name: 'thaila',
		},
	],
	ledgers: [
		{
			id: 1,
			ledger: 'ABS HDFC',
			type: 'Asset',
			accountType: 'Real',
			balances: '79453.3',
			notes: '-',
		},
		{
			id: 2,
			ledger: 'Adayar Anandha bhavan',
			type: 'Liability',
			accountType: 'Personal',
			balances: '',
			notes: '-',
		},
	],
};

export default seed;
