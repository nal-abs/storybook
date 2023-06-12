import { React } from 'react';
import CheckBox from '../../CheckBox';
import buildEvent from '../../helper/buildEvent';
import { nothing } from '@laufire/utils/fn';

const CheckBoxWrapper = (context) => {
	const { value: initialValue, onChange = nothing } = context;

	return (
		<CheckBox { ...{
			onChange: ({ target: { value: newValue }}) => {
				onChange(buildEvent(newValue));
			},
			value: initialValue,
		} }
		/>);
};

export default CheckBoxWrapper;
