import React, { useRef, useEffect } from 'react';
import color from '../../helper/color';
import { identity } from '@laufire/utils/fn';
import { Box } from '@mui/material';

const setCanvasImage = ({ canvasRef, imgRef, src }) => {
	const canvas = canvasRef.current;
	const context = canvas.getContext('2d', { willReadFrequently: true });
	const img = imgRef.current.firstChild;

	canvas.width = img.width;
	canvas.height = img.height;

	const image = new Image();

	image.onload = () => {
		context.drawImage(
			image, 0, 0, img.width, img.height
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

const Mask = (context) => {
	const { children, onChange = identity, style = {}} = context;
	const canvasRef = useRef(null);
	const imgRef = useRef(null);

	useEffect(() => {
		setCanvasImage({ ...context, canvasRef, imgRef });
	}, []);

	return (
		<Box ref={ imgRef } className="mask-container" { ...{ sx: style } }>
			{ children }
			<canvas
				ref={ canvasRef }
				className="mask"
				onClick={ (evt) => { onChange(getColor(evt, canvasRef)); } }
			/>
		</Box>
	);
};

export default Mask;
