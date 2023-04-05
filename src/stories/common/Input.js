/* eslint-disable max-lines-per-function */
import { InputAdornment, TextField } from '@mui/material';
import * as React from 'react';
import * as Icons from '@mui/icons-material';

const transform = (event) => ({
	target: {
		value: event.target.value,
	},
});

const Input = (context) => {
	const { inputs = { icon: '', text: '', position: 'start' }, multiline,
		AdornmentPosition = 'start', value, onChange = (x) => x,
		...args } = context;

	const Icon = Icons[inputs.icon];

	const InputProps = {
		[`${ AdornmentPosition }Adornment`]:
	<InputAdornment position={ inputs.position }>
		{	inputs.icon ? <Icon/> : inputs.text}
	</InputAdornment>,
	};
	const MultilineProps = multiline && { ...multiline, multiline: true };

	return (
		<TextField
			{ ...{
				InputProps,
				...MultilineProps, ...args,
			} }
			value={ value }
			onChange={ (evt) => {
				onChange(transform(evt));
			} }
		/>);
};

export default Input;

Input.propTypes = {

};
