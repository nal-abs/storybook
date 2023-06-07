import { nothing } from '@laufire/utils/fn';
import { Checkbox } from '@mui/material';
import PropTypes from 'prop-types';
import { React } from 'react';
import buildEvent from './helper/buildEvent';

const CheckBox = (context) => {
	const { value, onChange = nothing, ...args } = context;

	return (
		<Checkbox
			checked={ value }
			onChange={ (evt) => {
				onChange(buildEvent(evt.target.checked));
			} }
			{ ...args }
		/>);
};

export default CheckBox;

CheckBox.propTypes = { context: PropTypes.object };
