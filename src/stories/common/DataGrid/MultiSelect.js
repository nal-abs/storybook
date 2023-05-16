/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-lines-per-function */
import { useState, React } from 'react';
import Select from '../Select';
import { pick } from '@laufire/utils/collection';
import updateRow from './updateRow';

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

const MuiSelect = (context) => {
	const { options, widget } = context;
	const [value, setValue] = useState([]);

	return (
		<Select { ...{
			options: options.enum,
			multiple: true,
			sx: { width: '150px' },
			disableUnderline: true,
			variant: 'standard',
			onChange: ({ target: { value: newValue }}) => {
				updateRow({ ...context, value: newValue });
				setValue(newValue);
			},
			value: value,
			widget: widget,
		} }
		/>);
};

const MultiSelect = (context) => {
	const { schema: { items, widget }} = context;

	const multiSelectType = items.enum ? 'enum' : 'oneOf';

	return (
		<MuiSelect { ...{
			...context,
			options: dataFormatter[multiSelectType](items),
			widget: widget,
		} }
		/>);
};

export default MultiSelect;
