import { useState, React } from 'react';
import Switch from '../../Switch';
import handleChange from '../../handleChange';

const SwitchWrapper = (context) => {
	const { value: initialValue } = context;
	const [value, setValue] = useState(initialValue);
	const props = { context, setValue };

	return (
		<Switch { ...{
			onChange: ({ target: { value: newValue }}) =>
				handleChange(newValue, props),
			value: value,
		} }
		/>);
};

export default SwitchWrapper;
