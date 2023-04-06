import { useState, React } from 'react';
import IntegerValidation from '../../../../services/DataGrid/IntegerValidation';
import Input from '../../Input';
import props from './Props';

const IntegerTextField = (params) => {
	const { value } = params;
	const [integerValue, setValue]
	= useState(IntegerValidation.initialValue(value));

	return (
		<Input { ...props({ params, integerValue, setValue }) }/>
	);
};

export default IntegerTextField;
