import React, { useEffect, useState } from 'react';
import QrManager from '../../services/QrManager';
import { Box } from '@mui/material';
import Input from './Input';
import { identity } from '@laufire/utils/fn';

const setImageData = async (context) => {
	const { setState, onChange = identity } = context;
	const result = await QrManager.getImageData(context);

	setState((preState) => {
		const value = {
			...preState,
			...result,
		};

		onChange({ target: { value }});
		return value;
	});
};

const QrCodeUpload = (context) => {
	const [state, setState] = useState({ file: '', data: '', error: '' });

	useEffect(() => {
		setImageData({ ...context, setState, state });
	}, [state.file]);

	const { value } = context;

	return (
		<Box>
			<Input
				{ ...{
					type: 'file',
					...value,
					onChange: (evt) => {
						setState({ ...state, file: evt.target.files[0] });
					},
				} }
			/>
		</Box>
	);
};

export default QrCodeUpload;
