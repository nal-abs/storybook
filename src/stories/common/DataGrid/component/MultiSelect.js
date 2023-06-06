import { React, useState } from 'react';
import dataFormatter from '../dataFormatter';
import MultiSelectWrapper from './MultiSelectWrapper';
import handleChange from '../../helper/handleChange';

const MultiSelect = (context) => {
	const { schema: { items }, value: initialValue = [] } = context;
	const [value, setValue] = useState(initialValue);
	const multiSelectType = items.enum ? 'enum' : 'oneOf';
	const options = dataFormatter[multiSelectType](items);
	const onChange = ({ target: { value: newValue }}) =>
		handleChange(newValue, { setValue, context });
	const props = { value, onChange, options };

	return (
		<MultiSelectWrapper { ...{ ...props, ...context } }/>);
};

export default MultiSelect;
