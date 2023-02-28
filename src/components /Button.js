/* eslint-disable no-console */
import { Button as MuiButton } from '@mui/material';
import * as React from 'react';
import * as Icons from '@mui/icons-material';

const Icon = ({ startIcon, endIcon }) => {
	const StartIcon = Icons[startIcon];
	const EndIcon = Icons[endIcon];

	return {
		startIcon: startIcon ? <StartIcon/> : '',
		endIcon: endIcon ? <EndIcon/> : '',
	};
};

const Button = (context) => {
	const { children, ...args } = context;

	return (
		<MuiButton
			{ ...{ children, ...args, ...Icon(context) } }
			onClick={ () => console.log('clicked') }
		/>);
};

export default Button;
