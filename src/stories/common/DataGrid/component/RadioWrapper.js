import { useState, React } from 'react';
import RadioGroup from '../../RadioGroup';

const RadioWrapper = (context) => {
	const { schema, value: initialValue } = context;
	const [value, setValue] = useState(initialValue);

	return (
		<RadioGroup { ...{
			options: schema.enum,
			onChange: (evt) => setValue(evt.target.value),
			value: value,
			schema: schema,
		} }
		/>);
};

export default RadioWrapper;
