import genInput from '../genInput';
import transformSchema from '../transformSchema';
import Input from './Input';

const DecimalInput = genInput({
	input: Input,
	inputProps: transformSchema,
});

export default DecimalInput;
