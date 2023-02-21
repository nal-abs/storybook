import * as React from 'react';
import { Typography as Text } from '@mui/material';

const Typography = (context) => {
	const { prop: { ...args }} = context;

	return <Text { ...args }/>;
};

export default Typography;
