import IntegerValidator from '../IntegerValidator';

const integerInputProps = ({ params, integerValue, setValue }) => {
	const { props: { data: schema }, field, row } = params;
	const { maximum, minimum, multipleOf } = schema;

	return {
		variant: 'standard',
		type: 'number',
		value: integerValue.toString(),
		onChange: (event) => {
			IntegerValidator.updateInteger(
				setValue, event, schema, row, field
			);
		},
		InputProps: { disableUnderline: true },
		inputProps: {
			min: minimum,
			max: maximum,
			step: multipleOf,
		},
	};
};

export default integerInputProps;
