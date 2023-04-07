import { useState, React } from 'react';
import Input from '../../Input';
import integerInputProps from './integerInputProps';

const IntegerTextField = (params) => {
	const { value } = params;
	const [integerValue, setValue]
	= useState(parseInt(value, 10));

	return (
		<Input { ...integerInputProps({ params, integerValue, setValue }) }/>
	);
};

export default IntegerTextField;
