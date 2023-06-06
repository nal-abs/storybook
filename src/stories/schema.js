const schema = {
	singleSelect: {
		type: 'string',
		enum: ['India', 'Africa', 'US'],
	},
	radioGroup: {
		type: 'string',
		enum: ['India', 'Africa', 'US'],
		widget: 'radioGroup',
		disabled: false,
	},
	checkBoxGroup: {
		type: 'array',
		uniqueItems: true,
		widget: 'checkboxGroup',
		disabled: true,
		items: {
			type: 'string',
			enum: ['India', 'Africa', 'US'],
		},
		maxItems: 1,
	},
	input: {
		type: 'string',
		format: 'date-time',
		title: 'DateTime',
		formatMinimum: '2000-10-06T22:22:55',
		formatMaximum: '2014-11-16T21:25:33',
		widget: 'dateTimePicker',
	},
	multiSelect: {
		type: 'array',
		uniqueItems: true,
		readOnly: true,
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
		maxItems: 2,
	},
	checkBox: {
		type: 'boolean',
		title: 'IsActive',
		widget: 'checkbox',
	},
	slider: {
		type: 'integer',
		title: 'Integer',
		maximum: 50,
		minimum: -50,
		multipleOf: 10,
		widget: 'slider',
		disabled: true,
	},
	switch: {
		type: 'boolean',
		title: 'IsActive',
		widget: 'switch',
	},
	password: {
		type: 'string',
		title: 'Password',
		minLength: 2,
		widget: 'password',
	},
};

export default schema;
