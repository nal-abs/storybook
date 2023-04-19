import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const GenerateQRCode = (args) => {
	const [qrCode, setQRCode] = useState('');
	const [error, setError] = useState('');

	const { text = '', options = {}} = args;

	useEffect(() => {
		QRCode.toDataURL(
			text, options, (err, data) => {
				setQRCode(data);
				setError(err?.message);
			}
		);
	}, [args]);

	return (
		<div>
			{error}
			{qrCode && <img src={ qrCode } alt="QR code"/>}
		</div>
	);
};

export default GenerateQRCode;
