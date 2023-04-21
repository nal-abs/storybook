import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({
	value, renderAs = 'canvas', ...rest
}) => <QRCode { ...{ value, renderAs, ...rest } }/>;

export default QRCodeGenerator;
