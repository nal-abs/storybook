import React, { useRef, useEffect, useState } from 'react';
import color from '../../helper/color';
import { Box } from '@mui/material';
import Container from './Container';
import { identity } from '@laufire/utils/fn';

const setCanvasImage = ({ canvasRef, imgRef, src }) => {
	const canvas = canvasRef.current;
	const context = canvas.getContext('2d', { willReadFrequently: true });
	const img = imgRef.current.firstChild;

	canvas.width = img.clientWidth;
	canvas.height = img.clientHeight;

	const image = new Image();

	image.onload = () => {
		context.drawImage(
			image, 0, 0, img.clientWidth, img.clientHeight
		);
	};
	image.src = src;
};

const getColor = (evt, canvasRef) => {
	const canvas = canvasRef.current;
	const context = canvas.getContext('2d', { willReadFrequently: true });
	const rect = canvas.getBoundingClientRect();
	const x = evt.clientX - rect.left;
	const y = evt.clientY - rect.top;
	const { data } = context.getImageData(
		x, y, 1, 1
	);

	return color.rgbToHex(data);
};

const setValue = ({ canvasRef, setState, onChange }) => (evt) => {
	const value = getColor(evt, canvasRef);

	setState((preState) => {
		onChange({ ...preState, value });

		return { ...preState, value };
	});
};

const MaskContainer = (props) => {
	const { onChange = identity, state, setState, children, ...rest } = props;
	const canvasRef = useRef(null);
	const imgRef = useRef(null);

	useEffect(() => {
		setCanvasImage({ ...props, canvasRef, imgRef });

		onChange({ ...state });
	}, [state]);

	return <Box ref={ imgRef } className="mask-container" { ...rest }>
		{ children }
		<canvas
			ref={ canvasRef }
			className="mask"
			onClick={ setValue({ canvasRef, setState, onChange }) }
		/>
	</Box>;
};

const Mask = (props) => {
	const [state, setState] = useState({ width: 0, height: 0 });

	const enhancedProps = { ...props, state, setState };

	const containerOnChange = (data) => setState((preState) => ({
		...preState,
		...data,
	}));

	return (
		<Container onChange={ containerOnChange }>
			<MaskContainer { ...enhancedProps }/>
		</Container>
	);
};

export default Mask;
