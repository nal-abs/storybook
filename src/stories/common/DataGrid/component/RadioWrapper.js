import { useState, React } from 'react';
import RadioGroup from '../../RadioGroup';
import handleChange from '../../helper/handleChange';

const RadioWrapper = (context) => {
	const { schema, value: initialValue = '' } = context;
	const [value, setValue] = useState(initialValue);
	const props = { context, setValue };
	const options = schema.enum;
	const onChange = ({ target: { value: newValue }}) =>
		handleChange(newValue, props);

	return (
		<RadioGroup { ...{ options, onChange, value, schema, ...context	} }/>);
};

export default RadioWrapper;
