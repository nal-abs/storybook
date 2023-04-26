import genInput from '../genInput';
import transformSchema from '../transformSchema';

const IntegerInput = (context) => genInput(context)({
	extendedProps: {
		inputProps: transformSchema(context.schema),
	},
	transform: (newValue) => newValue,
});

export default IntegerInput;
