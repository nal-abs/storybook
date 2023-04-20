import React from 'react';
import QRCodeGenerate from './common/QRCodeGenerate';
import { peek } from '@laufire/utils/debug';

export default {
	title: 'Components/QRCode',
	component: QRCodeGenerate,
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

const Template = ({ dark, light, onChange, ...value }) =>
	<QRCodeGenerate { ...{
		value: { ...value, color: { dark, light }},
		onChange: onChange,
	} }
	/>;

export const GenerateQR = Template.bind({});

GenerateQR.args = {
	version: 3,
	errorCorrectionLevel: 'M',
	margin: 8,
	scale: 6,
	onChange: (evt) => peek(evt),
};
