import genInputField from '../genInputField';
import validate from './validate';

const Input = genInputField({
	validate,
});

export default Input;
