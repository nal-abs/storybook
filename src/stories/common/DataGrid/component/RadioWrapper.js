import { useState, React } from 'react';
import updateRow from '../updateRow';
import RadioGroup from '../../RadioGroup';

const RadioWrapper = (context) => {
	const { schema, value: initialValue } = context;
	const [value, setValue] = useState(initialValue);

	return (
		<RadioGroup { ...{
			options: schema.enum,
			onChange: ({ target: { value: newValue }}) => {
				updateRow({ ...context, value: newValue });
				setValue(newValue);
			},
			value: value,
		} }
		/>);
};

export default RadioWrapper;
