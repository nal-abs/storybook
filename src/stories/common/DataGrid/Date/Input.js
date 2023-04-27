import genInputField from '../genInputField';
import validate from './validate';
import dayjs from 'dayjs';

const Input = genInputField({
	validate: validate,
	transformValue: (value) => dayjs(value).format('YYYY-MM-DD'),
});

export default Input;
