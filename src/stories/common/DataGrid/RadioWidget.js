import { useState, React } from 'react';
import RadioGroup from '../RadioGroup';
import updateRow from './updateRow';

const RadioWidget = (context) => {
	const { schema } = context;
	const [value, setValue] = useState('');

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

export default RadioWidget;
