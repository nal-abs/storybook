import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const QRCodeGenerate = ({ value, onChange = () => {} }) => {
	const [qrCode, setQRCode] = useState('');
	const [error, setError] = useState('');

	const { text = '', ...options } = value;

	useEffect(() => {
		QRCode.toDataURL(
			text, options, (err, data) => {
				setQRCode(data);
				onChange({ target: { value: data }});
				setError(err?.message);
			}
		);
	}, [value]);

	return (
		<div>
			{error}
			{qrCode && <img src={ qrCode } alt="QR code"/>}
		</div>
	);
};

export default QRCodeGenerate;
