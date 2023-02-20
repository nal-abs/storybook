/* eslint-disable no-console */
import { Button as MuiButton } from '@mui/material';
import * as React from 'react';

const Button = (context) => {
	const { prop: { label, ...args }} = context;

	return (
		<MuiButton
			{ ...args }
			onClick={ () => console.log('clicked') }
		>{label}</MuiButton>);
};

export default Button;
