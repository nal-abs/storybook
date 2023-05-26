import PropTypes from 'prop-types';
import { Switch as MuiSwitch } from '@mui/material';
import { React, useState } from 'react';
import { nothing } from '@laufire/utils/fn';
import buildEvent from './buildEvent';

const Switch = (context) => {
	const { value, onChange = nothing, ...args } = context;
	const [state, setState] = useState(value);

	return (
		<MuiSwitch
			checked={ state }
			onChange={ (evt) => {
				setState(evt.target.checked);
				onChange(buildEvent(evt.target.checked));
			} }
			{ ...args }
		/>);
};

export default Switch;

Switch.propTypes = { context: PropTypes.object };
