
const inputType = {
	date: () => ({
		minWidth: 200,
		editable: false,
	}),
	array: () => ({
		minWidth: 200,
	}),
	dateTime: () => ({
		minWidth: 200,
		editable: false,
	}),
	time: () => ({
		minWidth: 150,
		editable: false,
	}),
	integer: () => ({
		editable: false,
	}),
	number: () => ({
		width: 150,
		editable: false,
	}),
	phoneNo: () => ({
		type: 'string',
		width: 150,
		editable: false,
	}),
};

export default inputType;
