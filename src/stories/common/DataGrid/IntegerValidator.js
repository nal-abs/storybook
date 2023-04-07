import isInteger from './isInteger';

const IntegerValidator = {
	getValidInteger: (
		{ target: { value }}, schema, prev
	) => {
		const number = value === '' ? value : Number(value);

		return isInteger(number, schema) || !value
			? number
			: prev;
	},

	updateInteger: (
		setValue, event, schema, row, field
	) => {
		setValue((prev) => {
			const newValue = IntegerValidator.getValidInteger(
				event, schema, prev
			);

			row[field] = newValue;
			return newValue;
		});
	},
};

export default IntegerValidator;
