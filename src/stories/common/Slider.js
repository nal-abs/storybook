import { nothing } from '@laufire/utils/fn';
import { Slider as MuiSlider } from '@mui/material';
import { React, useState } from 'react';

const Slider = (context) => {
	const { sx, value: initialValue, onChange = nothing, ...args } = context;
	const [value, setValue] = useState(initialValue);

	return (
		<MuiSlider { ...{
			sx: sx,
			value: value,
			onChange: (evt) => {
				setValue(evt.target.value);
				onChange(evt);
			},
			...args,
		} }
		/>);
};

export default Slider;
