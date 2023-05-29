import { useState, React } from 'react';
import CheckBox from '../../CheckBox';
import handleChange from '../../helper/handleChange';

const CheckBoxWrapper = (context) => {
	const { value: initialValue } = context;
	const [value, setValue] = useState(initialValue);
	const props = { context, setValue };

	return (
		<CheckBox { ...{
			onChange: ({ target: { value: newValue }}) =>
				handleChange(newValue, props),
			value: value,
		} }
		/>);
};

export default CheckBoxWrapper;
