/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import * as React from 'react';
import PropTypes from 'prop-types';
import TabContext from '@mui/lab/TabContext';
import { map } from '@laufire/utils/collection';

const style = {
	vertical: 'vertical-tab',
};

// const variants = {
// 	scrollable: {
// 		scrollButtons: 'auto',
// 		allowScrollButtonsMobile: true,
// 	},
// };

const Tabs = (context) => {
	const { prop:
	{ color, data, ...args }, selectedTab } = context;

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
					onClick={ () => selectedTab(ele.label) }
				/>)}
		</TabList>);
};

const DisplayTab = ({ context }) => {
	const { prop: { orientation, data }} = context;

	const [value, selectedTab] = React.useState('TodoPane');

	return (
		<Box className={ style[orientation] }>
			<TabContext value={ value }>
				<Box>
					<Tabs { ...{ ...context, value, selectedTab } }/>
				</Box>
				{map(data, (item, i) =>
					<TabPanel key={ i } value={ item.label }>
						{item.component}</TabPanel>)}
			</TabContext>
		</Box>
	);
};

export default DisplayTab;

DisplayTab.propTypes = {
	context: PropTypes.object,
	orientation: PropTypes.string,
	data: PropTypes.array,
	value: PropTypes.string,
	color: PropTypes.string,
	state: PropTypes.object,
	prop: PropTypes.object,
	actions: PropTypes.object,
	selectedTab: PropTypes.func,

};
DisplayTab.defaultProps = {
	value: 'TodoPane',
};
