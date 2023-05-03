import { useState, React } from 'react';
import Select from '../Select';

const SingleSelect = ({ row, field, schema }) => {
	const [value, setValue] = useState('');

	return (
		<Select { ...{
			options: schema.enum,
			sx: { width: '150px' },
			disableUnderline: true,
			variant: 'standard',
			onChange: ({ target: { value: newValue }}) => {
				row[field] = newValue;
				return setValue(newValue);
			},
			value: value,
		} }
		/>);
};

export default SingleSelect;
