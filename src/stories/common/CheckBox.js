/* eslint-disable no-console */
import { Checkbox } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';

const CheckBox = (context) => {
	const { ...args } = context;

	return (
		<Checkbox
			{ ...args }
			// onChange={ (evt) => setChecked(evt.target.checked) }
		/>);
};

export default CheckBox;

CheckBox.propTypes = {
	context: PropTypes.object,
};
