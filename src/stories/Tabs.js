/* eslint-disable max-lines-per-function */
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
import * as Icons from '@mui/icons-material';
import Button from './Button';
import CheckBox from './CheckBox';

const style = {
	vertical: 'vertical-tab',
};

const component = {
	Button,
	CheckBox,
};

const Icon = ({ icon }) => {
	const TabIcon = Icons[icon];

	return {
		icon: TabIcon ? <TabIcon/> : '',
	};
};

const DisplayTabs = (context) => {
	const {
		color, data,
		selectValue, ...args
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
					{ ...Icon(ele) }
					value={ i }
					onClick={ () => selectValue(i) }
				/>)}
		</TabList>);
};

const Tabs = (context) => {
	const { orientation, content, data } = peek(context);
	const Content = component[content];

	const [value, selectValue] = useState('0');

	return (
		<Box className={ style[orientation] }>
			<TabContext value={ value }>
				<DisplayTabs { ...{ ...context, value, selectValue } }/>
				{map(data, (item, key) =>
					<TabPanel key={ key } value={ key }>
						<Content/></TabPanel>)}
			</TabContext>
		</Box>
	);
};

export default Tabs;

Tabs.propTypes = {
	context: PropTypes.object,
};
