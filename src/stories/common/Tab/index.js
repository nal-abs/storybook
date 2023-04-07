import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TabContext from './TabContext';

const tabStyle = {
	vertical: 'vertical-tab',
	horizontal: 'horizontal-tab',
};

const transformEvent = (value) => ({
	target: {
		value,
	},
});

const Tab = (props) => {
	const { orientation, dir,
		value: initialValue, onChange = (x) => x } = props;

	const [value, selectValue] = useState(initialValue);
	const onClick = (tabKey) => {
		selectValue(tabKey);
		onChange(transformEvent(tabKey));
	};

	return (
		<Box dir={ dir } className={ tabStyle[orientation] }>
			<TabContext { ...{ props, onClick, value } }/>
		</Box>
	);
};

export default Tab;
