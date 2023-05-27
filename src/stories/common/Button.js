import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';
import * as React from 'react';
import * as Icons from '@mui/icons-material';

const Icon = ({ startIcon, endIcon }) => {
	const StartIcon = Icons[startIcon];
	const EndIcon = Icons[endIcon];

	return {
		startIcon: startIcon && <StartIcon/>,
		endIcon: endIcon && <EndIcon/>,
	};
};

const Button = ({ children = 'Button', ...rest }) =>
	<MuiButton { ...{ ...rest, ...Icon(rest) } }>
		{ children }
	</MuiButton>;

export default Button;

Button.propTypes = { children: PropTypes.node.isRequired };
