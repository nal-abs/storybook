/* eslint-disable no-console */
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';
import * as React from 'react';
import * as Icons from '@mui/icons-material';

const Icon = ({ prop: { startIcon, endIcon }}) => {
	const StartIcon = Icons[startIcon];
	const EndIcon = Icons[endIcon];

	return {
		startIcon: startIcon ? <StartIcon/> : '',
		endIcon: endIcon ? <EndIcon/> : '',
	};
};

const Button = (context) => {
	const { prop: { label, ...args }} = context;

	return (
		<MuiButton
			{ ...{ ...args, ...Icon(context) } }
			onClick={ () => console.log('clicked') }
		>{label}</MuiButton>);
};

export default Button;

Button.propTypes = {
	context: PropTypes.object,
};
