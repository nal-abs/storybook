import React, { useState } from 'react';
import Button from './Button';
import { QrReader } from 'react-qr-reader';

const ScanQRButton = ({ setState, state: { isScanning }, onChange }) =>
	<Button { ...{
		onClick: () => {
			onChange({ target: { value: '' }});
			setState({ data: '', isScanning: !isScanning });
		},
	} }
	>
		{isScanning ? 'stop scan' : 'start scan'}
	</Button>;

const ScanQrReader = ({ setState, onChange, ...args }) => {
	const getResult = (result, error) => ({
		inScanning: false,
		qrData: result?.text || error?.message,
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

const QRCodeScan = (args) => {
	const [state, setState] = useState({
		qrData: '', isScanning: false,
	});
	const { isScanning, qrData } = state;
	const context = { ...args, setState, state };

	return (
		<div>
			<ScanQRButton { ...{ ...context } }/>
			{ isScanning && <ScanQrReader { ...{ ...context } }/>}
			<div>{ qrData }</div>
		</div>);
};

export default QRCodeScan;
