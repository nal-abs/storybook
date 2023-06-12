import React from 'react';
import QrManager from '../../services/QrManager';
import { Box } from '@mui/material';
import Input from './Input';
import { identity } from '@laufire/utils/fn';

const setImageData = async (props) => {
	const { onChange = identity } = props;
	const value = await QrManager.getImageData(props);

	onChange({ target: { value }});
};

const QrCodeUpload = (props) => {
	const { value } = props;

	return (
		<Box>
			<Input
				{ ...{
					type: 'file',
					...value,
					onChange: (evt) => {
						setImageData({ ...props, data: evt.target.files[0] });
					},
				} }
			/>
		</Box>
	);
};

export default QrCodeUpload;
