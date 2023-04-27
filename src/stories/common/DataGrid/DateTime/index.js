import Input from './Input';
import genInput from '../genInput';

const limits = ({ formatMinimum, formatMaximum }) => ({
	min: formatMinimum,
	max: formatMaximum,
});

const DateTimeInput = genInput({
	type: 'datetime-local',
	input: Input,
	inputProps: limits,
	updateRow: (newValue) => `${ newValue }.000Z`,
});

export default DateTimeInput;
