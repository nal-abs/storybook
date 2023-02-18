import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import * as React from 'react';
import PropTypes from 'prop-types';
import TabContext from '@mui/lab/TabContext';
import { map } from '@laufire/utils/collection';
import { useState } from 'react';
import { peek } from '@laufire/utils/debug';

const style = {
	vertical: 'vertical-tab',
};

const DisplayTabs = (context) => {
	const {
		prop: { color, data, ...args },
		selectValue,
	} = context;

	return (
		<TabList
			{ ...args }
			textColor={ color }
			indicatorColor={ color }
		>
			{map(data, (ele, i) =>
				<Tab
					key={ i }
					label={ ele.label }
					value={ ele.label }
					onClick={ () => selectValue(ele.label) }
				/>)}
		</TabList>);
};

const Tabs = (context) => {
	const { prop: { orientation, data }, state: { tab }} = peek(context);

	const [value, selectValue] = useState(tab);

	return (
		<Box className={ style[orientation] }>
			<TabContext value={ value }>
				<Box>
					<DisplayTabs { ...{ ...context, value, selectValue } }/>
				</Box>
				{map(data, (item, key) =>
					<TabPanel key={ key } value={ item.label }>
						{item.component}</TabPanel>)}
			</TabContext>
		</Box>
	);
};

export default Tabs;

Tabs.propTypes = {
	context: PropTypes.object,
};
