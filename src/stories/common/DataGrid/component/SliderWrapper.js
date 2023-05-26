import { useState, React } from 'react';
import Slider from '../../Slider';
import handleChange from '../../handleChange';

const sliderProps = (schema) => ({
	size: 'large',
	color: 'success',
	valueLabelDisplay: 'auto',
	min: schema.minimum,
	max: schema.maximum,
	step: schema.multipleOf,
	sx: { width: '70%' },
	disabled: schema.disabled,
});

const SliderWrapper = (context) => {
	const { value: initialValue, schema } = context;
	const [value, setValue] = useState(initialValue);
	const props = { context, setValue };

	return (
		<Slider { ...{
			onChange: ({ target: { value: newValue }}) =>
				handleChange(newValue, props),
			value: value,
			...sliderProps(schema),
		} }
		/>);
};

export default SliderWrapper;
