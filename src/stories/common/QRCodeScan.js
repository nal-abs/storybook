import React, { useState } from 'react';
import Button from './Button';
import { QrReader } from 'react-qr-reader';
import { nothing } from '@laufire/utils/predicates';

const ScanQRButton = ({ setState, state, onChange }) =>
	<Button { ...{
		onClick: () => {
			const result = {
				isScanning: !state.isScanning,
			};

			setState(result);
			onChange({ target: { value: { ...state, ...result }}});
		},
	} }
	>
		{state.isScanning ? 'stop scan' : 'start scan'}
	</Button>;

const ScanQrReader = ({ setState, onChange, ...args }) => {
	const getResult = (result, error) => ({
		...result && { isScanning: false, data: result },
		error,
	});

	return (
		<QrReader
			{ ...{ ...args } }
			onResult={ (...data) => {
				const result = getResult(...data);

				onChange({ target: { value: result }});
				setState(result);
			} }
		/>);
};

const QRCodeScan = ({ onChange = nothing, ...args }) => {
	const [state, setState] = useState({ isScanning: false });
	const { isScanning } = state;
	const context = { ...args, setState, state, onChange };

	return (
		<div>
			<ScanQRButton { ...{ ...context } }/>
			{ isScanning && <ScanQrReader { ...{ ...context } }/>}
		</div>);
};

export default QRCodeScan;
