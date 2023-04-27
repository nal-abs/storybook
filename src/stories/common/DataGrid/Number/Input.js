import validate from './validate';
import genInputField from '../genInputField';

const regExp = /^-?(?:0|[1-9]\d*)?(?:\.?|\.\d*)$/;

const Input = genInputField({
	validate: validate,
	isInputValid: (value) => regExp.test(value),
	transformValue: (value) => Number(value),
});

export default Input;
