import genInputField from '../genInputField';
import validate from './validate';
import dayjs from 'dayjs';

const Input = genInputField({
	validate: validate,
	transformValue: (value) => dayjs(`1/1/2000 ${ value }`).format('hh:mm:ss'),
});

export default Input;
