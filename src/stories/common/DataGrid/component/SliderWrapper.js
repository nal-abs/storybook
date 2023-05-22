import { useState, React } from 'react';
import updateRow from '../updateRow';
import Slider from '../../Slider';

const sliderProps = (schema) => ({
	size: 'large',
	color: 'success',
	valueLabelDisplay: 'auto',
	min: schema.minimum,
	max: schema.maximum,
	step: schema.multipleOf,
	sx: { width: '70%' },
});

const SliderWrapper = (context) => {
	const { value: initialValue, schema } = context;
	const [value, setValue] = useState(initialValue);

	return (
		<Slider { ...{
			onChange: ({ target: { value: newValue }}) => {
				updateRow({ ...context, value: newValue });
				setValue(newValue);
			},
			value: value,
			...sliderProps(schema),
		} }
		/>);
};

export default SliderWrapper;
