import genInputField from '../genInputField';
import validate from './validate';

const regExp = /^(?:[0-]|-?([1-9]+[0-9]*)?)$/;

const Input = genInputField({
	validate: validate,
	isInputValid: (value) => regExp.test(value),
	transformValue: (value) => Number(value),
});

export default Input;
