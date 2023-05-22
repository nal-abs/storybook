import { useState, React } from 'react';
import Select from '../../Select';
import updateRow from '../updateRow';

const SingleSelect = (context) => {
	const { schema } = context;
	const [value, setValue] = useState('');

	return (
		<Select { ...{
			options: schema.enum,
			sx: { width: '150px' },
			disableUnderline: true,
			variant: 'standard',
			onChange: ({ target: { value: newValue }}) => {
				updateRow({ ...context, value: newValue });
				setValue(newValue);
			},
			value: value,
			schema: schema,
		} }
		/>);
};

export default SingleSelect;
