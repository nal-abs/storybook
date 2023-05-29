import { useState, React } from 'react';
import RadioGroup from '../../RadioGroup';
import handleChange from '../../helper/handleChange';

const RadioWrapper = (context) => {
	const { schema, value: initialValue = '' } = context;
	const [value, setValue] = useState(initialValue);
	const props = { context, setValue };

	return (
		<RadioGroup { ...{
			options: schema.enum,
			onChange: ({ target: { value: newValue }}) =>
				handleChange(newValue, props),
			value: value,
			schema: schema,
		} }
		/>);
};

export default RadioWrapper;
