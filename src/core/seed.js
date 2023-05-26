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
			date: '2022-07-07',
			credit: 'Equity share capital',
			debit: 'ABS HDFC',
			amount: 50000,
			document: '1',
			notes: '#565656',
			country: 'US',
			oneOf: ['US'],
			countries: [],
		},
		{
			id: 2,
			date: '2022-09-24',
			credit: 'ABS HDFC',
			debit: 'uber',
			amount: 249,
			document: 'S11669701',
			notes: '#ab5856',
			country: 'India',
			oneOf: [],
			countries: ['India'],
		},
	],
	ledgers: [
		{
			id: 1,
			ledger: 'ABS HDFC',
			type: 'Asset',
			accountType: 'Real',
			balances: 79453.3,
			notes: '-',
			isActive: false,
			dateTime: '2018-06-12T19:30:55',
			integer: 5,
			phoneNo: '1234567890',
			time: '13:30:00',
		},
		{
			id: 2,
			ledger: 'Adayar Anandha bhavan',
			type: 'Liability',
			accountType: 'Personal',
			balances: 0,
			notes: '-',
			time: '01:30:20',
			isActive: true,
			integer: 10,
		},
	],
};

export default seed;
