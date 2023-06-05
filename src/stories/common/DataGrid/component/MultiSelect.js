import { useState, React } from 'react';
import Select from '../../Select';
import dataFormatter from '../dataFormatter';
import handleChange from '../../helper/handleChange';

const getInputProps = (schema) => {
	const { readOnly, disabled } = schema;

	return { inputProps: { readOnly, disabled }};
};

const MuiSelect = (context) => {
	const { options, schema, value: initialValue = [], validate } = context;
	const [value, setValue] = useState(initialValue);
	const props = { context, setValue };

	return (
		<Select { ...{
			options: options,
			multiple: true,
			sx: { width: '150px' },
			disableUnderline: true,
			variant: 'standard',
			onChange: ({ target: { value: newValue }}) =>
				handleChange(newValue, props),
			value: value,
			schema: schema,
			...getInputProps(schema),
			validate: validate,
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
