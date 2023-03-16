const config = {
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
	data: {
		properties: {
			age: {
				title: 'Age',
				type: 'number',
			},
			id: {
				title: 'Id',
				type: 'number',
			},
		},
	},

};

export default config;
