import PropTypes from 'prop-types';
import { Switch as MuiSwitch } from '@mui/material';
import * as React from 'react';

const Switch = (context) => {
	const { ...args } = context;

	return (
		<MuiSwitch
			{ ...{ ...args } }
		/>);
};

export default Switch;

Switch.propTypes = {
	context: PropTypes.object,
};
