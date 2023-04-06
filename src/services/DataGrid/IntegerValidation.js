import validateInteger from '../../stories/common/DataGrid/validateInteger';

const IntegerValidation = {
	handleInteger: (
		{ target: { value }}, schema, prev
	) => {
		const NumberValue = Number(value) || value;

		return validateInteger(NumberValue, schema)
		|| !value
			? NumberValue
			: prev;
	},

	handleChange: (
		setValue, event, schema, row, field
	) => {
		setValue((prev) => {
			const newValue = IntegerValidation.handleInteger(
				event, schema, prev
			);

			row[field] = newValue;
			return newValue;
		});
	},
	initialValue: (value) =>
		(Number.isInteger(value) ? value : parseInt(value, 10)),
};

export default IntegerValidation;
