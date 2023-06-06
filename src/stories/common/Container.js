import { identity } from '@laufire/utils/fn';
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector';

const Container = ({ onChange = identity, children, ...args }) => {
	const { width, height, ref } = useResizeDetector();

	useEffect(() => {
		const orientation = width > height ? 'portrait' : 'landscape';

		onChange({ width, height, orientation });
	}, [width, height]);

	return (
		<Box ref={ ref } { ...args }>
			{ children }
		</Box>
	);
};

export default Container;
