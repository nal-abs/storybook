import Input from './Input';
import genInput from '../genInput';

const limits = ({ formatMinimum, formatMaximum }) => ({
	min: formatMinimum,
	max: formatMaximum,
});

const DateInput = genInput({
	input: Input,
	inputProps: limits,
	type: 'date',
});

export default DateInput;
