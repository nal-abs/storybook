import { nothing } from '@laufire/utils/fn';
import { Checkbox } from '@mui/material';
import PropTypes from 'prop-types';
import { React, useState } from 'react';
import buildEvent from './buildEvent';

const CheckBox = (context) => {
	const { value, onChange = nothing, ...args } = context;
	const [state, setState] = useState(value);

	return (
		<Checkbox
			checked={ state }
			onChange={ (evt) => {
				setState(evt.target.checked);
				onChange(buildEvent(evt.target.checked));
			} }
			{ ...args }
		/>);
};

export default CheckBox;

CheckBox.propTypes = {
	context: PropTypes.object,
};
