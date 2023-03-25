/* eslint-disable max-lines-per-function */
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import { Tab as MuiTab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import * as React from 'react';
import PropTypes from 'prop-types';
import TabContext from '@mui/lab/TabContext';
import { map, values } from '@laufire/utils/collection';
import { useState } from 'react';
import * as Icons from '@mui/icons-material';
import Components from './Components';

const style = {
	vertical: 'vertical-tab',
};
const hasLabel = (selectedStyle, label) =>
	selectedStyle.text && { label };

const hasIcon = (selectedStyle, icon) => {
	const TabIcon = Icons[icon];

	return selectedStyle.icon && TabIcon
		? { icon: <TabIcon/> }
		: '';
} ;
const onchange = (value) => ({
	evt: {
		target: {
			value,
		},
	},
});
const Tabs = (context) => {
	const {
		color, content,
		selectValue, orientation, selectedStyle,
	} = context;

	return (
		<TabList
			orientation={ orientation }
			textColor={ color }
			indicatorColor={ color }
		>
			{values(map(content, (ele, tab) =>
				<MuiTab
					key={ tab }
					{ ...hasLabel(selectedStyle, tab) }
					{ ...hasIcon(selectedStyle, ele.icon) }
					value={ tab }
					onClick={ () => {
						selectValue(tab);
						onchange(tab);
					} }
				/>))}</TabList>);
};

const Tab = (context) => {
	const { orientation, content, dir, value: initialValue } = context;

	const [value, selectValue] = useState(initialValue);

	return (
		<Box dir={ dir } className={ style[orientation] }>
			<TabContext value={ value }>
				<Tabs { ...{ ...context, value, selectValue } }/>
				{values(map(content, (item, key) => {
					const config = item;
					const Child = Components[config.component];

					return <TabPanel key={ key } value={ key }>
						<Child/>
					</TabPanel>;
				}))}
			</TabContext>
		</Box>
	);
};

export default Tab;

Tab.propTypes = {
	context: PropTypes.object,
};
