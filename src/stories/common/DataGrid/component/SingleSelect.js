import { useState, React } from 'react';
import handleChange from '../../helper/handleChange';
import SingleSelectWrapper from './SingleSelectWrapper';

const SingleSelect = (context) => {
	const { schema, value: initialValue = '' } = context;
	const [value, setValue] = useState(initialValue);
	const options = schema.enum;
	const onChange = ({ target: { value: newValue }}) =>
		handleChange(newValue, { context, setValue });
	const props = { options, onChange, value };

	return (
		<SingleSelectWrapper { ...{ ...props, ...context } }/>);
};

export default SingleSelect;
