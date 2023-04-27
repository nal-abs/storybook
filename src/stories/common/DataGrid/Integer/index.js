import Input from './Input';
import transformSchema from '../transformSchema';
import genInput from '../genInput';

const IntegerInput = genInput({
	input: Input,
	inputProps: transformSchema,
});

export default IntegerInput;
