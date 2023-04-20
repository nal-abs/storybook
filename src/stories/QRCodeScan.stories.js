import React from 'react';
import QRCodeScan from './common/QRCodeScan';
import { peek } from '@laufire/utils/debug';

export default {
	title: 'Components/QRCode',
	component: QRCodeScan,
	argTypes: {
		facingMode: {
			type: 'select',
			options: ['user', 'environment'],
		},
	},
};

const Template = ({ facingMode, ...args }) =>
	<QRCodeScan { ...{ ...args, constraints: { facingMode }} }/>;

export const ScanQR = Template.bind({});

ScanQR.args = {
	onChange: peek,
};
