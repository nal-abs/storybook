/* eslint-disable react/jsx-indent */
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import * as React from 'react';
import PropTypes from 'prop-types';
import TabContext from '@mui/lab/TabContext';
import { map } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';

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
	const { actions, prop:
	{ color, data, ...args }} = context;

	return (
		<TabList
			onChange={ (evt, index) => actions.selectedTab(index) }
			{ ...args }
			textColor={ color }
			indicatorColor={ color }
		>
			{map(data, (ele, i) =>
				<Tab key={ i } label={ ele.label } value={ ele.label }/>)}
		</TabList>);
};

const DisplayTab = ({ context }) => {
	const { state: { value },
		prop: { orientation, data }} = peek(context);

	return (
		<Box className={ style[orientation] }>
			<TabContext value={ value }>
				<Box>
					<Tabs { ...context }/>
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
};
DisplayTab.defaultProps = {
	value: 'TodoPane',
};
