import React from 'react';
import QrCodeUpload from './common/QrCodeUpload';
import { peek } from '@laufire/utils/debug';

export default {
	title: 'Components/QRCode',
	component: QrCodeUpload,
};

const Template = ({ accept, ...args }) =>
	<QrCodeUpload { ...{ ...args, inputProps: { accept }} }/>;

export const FileQr = Template.bind({});

FileQr.args = {
	accept: '.png, .jpeg',
	onChange: peek,
};
