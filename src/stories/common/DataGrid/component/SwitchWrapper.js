import { React } from 'react';
import MuiSwitch from '../../Switch';
import buildEvent from '../../helper/buildEvent';
import { nothing } from '@laufire/utils/fn';

const SwitchWrapper = (context) => {
	const { value: initialValue, onChange = nothing } = context;

	return (
		<MuiSwitch { ...{
			onChange: (evt) => onChange(buildEvent(evt.target.value)),
			checked: initialValue,
		} }
		/>);
};

export default SwitchWrapper;
