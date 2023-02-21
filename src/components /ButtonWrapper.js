import * as React from 'react';
import Button from './Button';

const ButtonWrapper = (context) =>
	<Button { ...{ ...context,
		prop: {
			children: 'HI',
			variant: 'contained',
			size: 'large',
			color: 'success',
			disabled: false,
			disableElevation: true,
			startIcon: 'Delete',
			fullWidth: false,
			href: 'https://mui.com/material-ui/react-button/',
			disableFocusRipple: true,
			disableRipple: false,
			sx: { border: '10px solid black' },
		}}
	}
	/>;

export default ButtonWrapper;
