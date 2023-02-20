import * as React from 'react';
import Button from './Button';

const ButtonWrapper = (context) =>
	<Button { ...{ ...context,
		prop: {
			label: 'HI',
			variant: 'contained',
			size: 'large',
			color: 'success',
			disabled: false,
			disableElevation: true,
		}}
	}
	/>;

export default ButtonWrapper;
