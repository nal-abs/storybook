import genInput from '../genInput';
import Component from './Input';
import buildInputProp from '../buildInputProp';

const Number = genInput({
	Component,
	buildInputProp,
});

export default Number;
