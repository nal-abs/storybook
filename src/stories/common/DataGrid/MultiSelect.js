import { useState, React } from 'react';
import Select from '../Select';
import { pick } from '@laufire/utils/collection';

const dataFormatter = {
	enum: (items) => ({
		enum: items.enum,
	}),
	oneOf: (items) => {
		const array = items.oneOf;

		return {
			enum: pick(array, 'title'),
		};
	},
};

const MuiSelect = ({ params, data }) => {
	const [value, setValue] = useState([]);

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

const MultiSelect = (context) => {
	const { schema: { items }, ...rest } = context;

	const multiSelectType = items.enum ? 'enum' : 'oneOf';

	return (
		<MuiSelect { ...{
			params: rest,
			data: dataFormatter[multiSelectType](items),
		} }
		/>);
};

export default MultiSelect;
