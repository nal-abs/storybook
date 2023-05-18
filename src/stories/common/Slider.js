import { nothing } from '@laufire/utils/fn';
import { Box, Slider as MuiSlider } from '@mui/material';
import { React, useState } from 'react';

const Slider = (context) => {
	const { sx, value: initialValue, onChange = nothing, ...args } = context;
	const [value, setValue] = useState(initialValue);

	return <Box sx={ sx }>
		<MuiSlider { ...{
			value: value,
			onChange: (evt) => {
				setValue(evt.target.value);
				onChange(evt);
			},
			...args,
		} }
		/>
	</Box>;
};

export default Slider;
