import { Checkbox } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';

const CheckBox = ({ ...args }) =>
	<Checkbox
		{ ...args }
	/>;

export default CheckBox;

CheckBox.propTypes = {
	context: PropTypes.object,
};
