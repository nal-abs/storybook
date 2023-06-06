import { useState, React } from 'react';
import handleChange from '../../helper/handleChange';
import SliderWrapper from './SliderWrapper';

const IntegerRange = (context) => {
	const { value: initialValue } = context;
	const [value, setValue] = useState(initialValue);
	const onChange = ({ target: { value: newValue }}) =>
		handleChange(newValue, { context, setValue });
	const props = { value, onChange };

	return (
		<SliderWrapper { ...{ ...props, ...context } }/>);
};

export default IntegerRange;
