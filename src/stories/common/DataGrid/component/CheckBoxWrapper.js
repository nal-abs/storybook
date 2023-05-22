import { useState, React } from 'react';
import updateRow from '../updateRow';
import CheckBox from '../../CheckBox';

const CheckBoxWrapper = (context) => {
	const { value: initialValue } = context;
	const [value, setValue] = useState(initialValue);

	return (
		<CheckBox { ...{
			onChange: ({ target: { value: newValue }}) => {
				updateRow({ ...context, value: newValue });
				setValue(newValue);
			},
			value: value,
		} }
		/>);
};

export default CheckBoxWrapper;
