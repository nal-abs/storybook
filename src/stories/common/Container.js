import React, { useEffect, useRef } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { Box } from '@mui/material';
import shortcut from './helper/shortcut';
import { identity } from '@laufire/utils/fn';
import { map } from '@laufire/utils/collection';

const Container = ({
	onChange = identity,
	children, shortcuts = [], ...args
}) => {
	const ref = useRef();
	const { width, height } = useResizeDetector({ targetRef: ref });

	useEffect(() => {
		const orientation = width > height ? 'portrait' : 'landscape';

		onChange({ width, height, orientation });
	}, [width, height]);

	useEffect(() => {
		map(shortcuts, (cb, key) =>
			shortcut.createShortcut({ cb, key, ref }));
	}, []);

	return (
		<Box ref={ ref } className="container" tabIndex="-1" { ...args }>
			{ children }
		</Box>
	);
};

export default Container;
