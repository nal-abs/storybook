import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import { Tab as MuiTab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import * as React from 'react';
import PropTypes from 'prop-types';
import TabContext from '@mui/lab/TabContext';
import { map } from '@laufire/utils/collection';
import { useState } from 'react';
import * as Icons from '@mui/icons-material';
import Components from './Components';

const style = {
	vertical: 'vertical-tab',
};

const Icon = ({ icon }) => {
	const TabIcon = Icons[icon];

	return {
		icon: TabIcon ? <TabIcon/> : '',
	};
};
const Tabs = (context) => {
	const {
		color, data,
		selectValue, orientation, selectedStyle,
	} = context;

	return (
		<TabList
			orientation={ orientation }
			textColor={ color }
			indicatorColor={ color }
		>
			{map(data, (ele, i) =>
				<MuiTab
					key={ i }
					{ ...selectedStyle.text && { label: ele.label } }
					{ ...selectedStyle.icon && { ...Icon(ele) } }
					value={ i }
					onClick={ () => selectValue(i) }
				/>)}</TabList>);
};

const Tab = (context) => {
	const { orientation, content, data, dir } = context;

	const [value, selectValue] = useState('0');

	return (
		<Box dir={ dir } className={ style[orientation] }>
			<TabContext value={ value }>
				<Tabs { ...{ ...context, value, selectValue } }/>
				{map(data, (item, key) => {
					const config = content[item.label];
					const Child = Components[config.component];

					return <TabPanel key={ key } value={ key }>
						<Child/>
					</TabPanel>;
				})}
			</TabContext>
		</Box>
	);
};

export default Tab;

Tab.propTypes = {
	context: PropTypes.object,
};
