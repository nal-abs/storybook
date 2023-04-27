import Component from './Input';
import genInput from '../genInput';

const buildInputProp = ({ formatMinimum, formatMaximum }) => ({
	min: formatMinimum,
	max: formatMaximum,
});

const Date = genInput({
	Component: Component,
	buildInputProp: buildInputProp,
	type: 'date',
});

export default Date;
