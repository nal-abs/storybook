import React from 'react';
import QRCodeGenerator from './common/QRCodeGenerate';
import { peek } from '@laufire/utils/debug';

export default {
	title: 'Components/QRCode',
	component: QRCodeGenerator,
	argTypes: {
		value: {
			type: 'string',
		},
		style: {
			type: 'object',
		},
		size: {
			type: 'number',
		},
		includeMargin: {
			type: 'boolean',
		},
		bgColor: {
			control: 'color',
		},
		fgColor: {
			control: 'color',
		},
		level: {
			type: 'select',
			options: ['L', 'M', 'Q', 'H'],
		},
		renderAs: {
			type: 'select',
			options: ['canvas', 'svg'],
		},
		imageSettings: {
			type: 'object',
		},
	},
};

const Template = ({ onChange, value, ...args }) =>
	<QRCodeGenerator { ...{
		value,
		onChange,
		...args,
	} }
	/>;

export const GenerateQR = Template.bind({});

GenerateQR.args = {
	value: 'hello',
	onClick: peek,
};
