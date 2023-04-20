import React from 'react';
import GenerateQRCode from './common/GenerateQRCode';

export default {
	title: 'Components/QRCode',
	component: GenerateQRCode,
	argTypes: {
		text: {
			type: 'string',
		},
		version: {
			type: 'number',
		},
		margin: {
			type: 'number',
		},
		scale: {
			type: 'number',
		},
		maskPattern: {
			type: 'number',
		},
		dark: {
			control: 'color',
		},
		light: {
			control: 'color',
		},
		errorCorrectionLevel: {
			type: 'select',
			options: ['low', 'medium', 'quartile', 'high'],
		},
	},
};

const Template = ({ text, dark, light, ...options }) =>
	<GenerateQRCode { ...{
		text: text, options: { ...options, color: { dark, light }},
	} }
	/>;

export const GenerateQR = Template.bind({});

GenerateQR.args = {
	version: 3,
	errorCorrectionLevel: 'M',
	margin: 8,
	scale: 6,
};