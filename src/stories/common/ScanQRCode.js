import React, { useState } from 'react';
import Button from './Button';
import { QrReader } from 'react-qr-reader';

const setResult = (result, error) => ({
	inScanning: false,
	qrData: result?.text || error?.message,
});

const ScanQRCode = (args) => {
	const [{ qrData, isScanning }, setQrData] = useState({
		qrData: '', isScanning: false,
	});

	return (
		<div>
			<Button { ...{
				onClick: () => {
					setQrData({ data: '', isScanning: !isScanning });
				},
			} }
			>{ isScanning ? 'stop scan' : 'start scan' }</Button>
			{ isScanning
				&& <QrReader
					{ ...{ ...args } }
					onResult={ (...data) => setQrData(setResult(...data)) }
				// eslint-disable-next-line no-mixed-spaces-and-tabs
				   />}
			<div>{ qrData }</div>
		</div>);
};

export default ScanQRCode;
