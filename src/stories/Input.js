import { InputAdornment, TextField } from '@mui/material';
import * as React from 'react';
import * as Icons from '@mui/icons-material';
// import PropTypes from 'prop-types';

const Input = (context) => {
	const { inputs, AdornmentPosition, multiline, ...args } = context;
	const Icon = Icons[inputs.icon];
	const MultilineProps = multiline && { ...multiline, multiline: true };

	const InputProps = {
		[`${ AdornmentPosition }Adornment`]:
	<InputAdornment position={ inputs.position }>
		{	inputs.icon ? <Icon/> : inputs.text}
	</InputAdornment>,
	};

	return <TextField { ...{ InputProps, ...MultilineProps, ...args } }/>;
};

export default Input;

Input.propTypes = {

};
