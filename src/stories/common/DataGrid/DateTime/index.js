import Component from './Input';
import genInput from '../genInput';

const buildInputProp = ({ formatMinimum, formatMaximum }) => ({
	min: formatMinimum,
	max: formatMaximum,
});

const DateTime = genInput({
	type: 'datetime-local',
	Component: Component,
	buildInputProp: buildInputProp,
	updateRow: (newValue) => `${ newValue }.000Z`,
});

export default DateTime;
