import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import * as React from 'react';
import TabContext from '@mui/lab/TabContext';

// const orientation = 'horizontal';

// const prop = {
// 	color: 'secondary',
// 	variant: 'scrollable',
// };

const Tabs = (context) => {
	const { actions, config: { TabItems }, prop:
	{ orientation, color, variant }} = context;

	return (
		<TabList
			onChange={ (evt, index) => actions.selectedTab(index) }
			orientation={ orientation }
			textColor={ color }
			indicatorColor={ color }
			variant={ variant }
			scrollButtons="auto"
			allowScrollButtonsMobile={ true }
		>
			{TabItems.map((ele, i) =>
				<Tab key={ i } label={ ele.label } value={ ele.label }/>)}
		</TabList>);
};

const DisplayTab = (context) => {
	const { state: { value }, config: { TabItems },
		prop: { orientation }} = context;
	const style = orientation === 'vertical'
		? { flexDirection: 'row' }
		: { flexDirection: 'column' };

	return (
		<Box sx={ { ...style, display: 'flex' } }>
			<TabContext value={ value }>
				<Box>
					<Tabs { ...context }/>
				</Box>
				{TabItems.map((item, i) =>
					<TabPanel key={ i } value={ item.label }>
						{item.component}</TabPanel>)}
			</TabContext>
		</Box>
	);
};

export default DisplayTab;
