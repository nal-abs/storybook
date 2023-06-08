import { useState, React } from 'react';
import CheckBox from '../../CheckBox';
import buildEvent from '../../helper/buildEvent';
import { nothing } from '@laufire/utils/fn';

const CheckBoxWrapper = (context) => {
	const { value: initialValue, onChange = nothing } = context;
	const [value, setValue] = useState(initialValue);

	return (
		<CheckBox { ...{
			onChange: ({ target: { value: newValue }}) => {
				setValue(newValue);
				onChange(buildEvent(newValue));
			},
			value: value,
		} }
		/>);
};

export default CheckBoxWrapper;
