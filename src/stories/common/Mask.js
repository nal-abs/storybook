import React, { useRef, useEffect } from 'react';
import buildEvent from './buildEvent';
import color from '../../helper/color';
import { identity } from '@laufire/utils/fn';

const sliceLength = 3;

const setCanvasImage = (canvasRef, imgRef) => {
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
	image.src = 'http://localhost:6006/logo192.png';
};

const setColor = (
	evt, canvasRef, onChange
) => {
	const canvas = canvasRef.current;
	const context = canvas.getContext('2d', { willReadFrequently: true });
	const rect = canvas.getBoundingClientRect();
	const x = evt.clientX - rect.left;
	const y = evt.clientY - rect.top;
	const { data } = context.getImageData(
		x, y, 1, 1
	);

	const hex = color.rgbToHex(data.slice(0, sliceLength));

	onChange(buildEvent(hex));
};

const Mask = ({ children, onChange = identity }) => {
	const canvasRef = useRef(null);
	const imgRef = useRef(null);

	useEffect(() => {
		setCanvasImage(canvasRef, imgRef);
	}, []);

	return (
		<div ref={ imgRef } className="parent">
			{ children }
			<canvas
				ref={ canvasRef }
				className="mask"
				onClick={ (evt) => setColor(
					evt, canvasRef, onChange
				) }
			/>
		</div>
	);
};

export default Mask;
