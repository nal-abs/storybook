import { useState, React } from 'react';
import Select from '../Select';

const MultiSelect = ({ params, data }) => {
	const [value, setValue] = useState(params.field);

	return (
		<Select { ...{
			options: data.enum,
			multiple: true,
			sx: { width: '150px' },
			disableUnderline: true,
			variant: 'standard',
			onChange: ({ target: { value: newValue }}) => {
				params.row[params.field] = newValue;
				return setValue(newValue);
			},
			value: value,
		} }
		/>);
};

export default MultiSelect;
