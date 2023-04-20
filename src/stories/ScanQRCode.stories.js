import React from 'react';
import ScanQRCode from './common/ScanQRCode';

export default {
	title: 'Components/QRCode',
	component: ScanQRCode,
	argTypes: {
		facingMode: {
			type: 'select',
			options: ['user', 'environment'],
		},
	},
};

const Template = ({ facingMode, ...args }) =>
	<ScanQRCode { ...{ ...args, constraints: { facingMode }} }/>;

export const ScanQR = Template.bind({});

ScanQR.args = {

};
