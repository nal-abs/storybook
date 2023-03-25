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

const tabStyle = {
	vertical: 'vertical-tab',
};
const styles = {
	iconOnly: {
		icon: true,
		text: false,
	},
	textOnly: {
		icon: false,
		text: true,
	},
	iconAndText: {
		icon: true,
		text: true,
	},
};

const getLabel = (style, { label }) =>
	style.text && { label };

const getIcon = (style, { icon }) => {
	const TabIcon = Icons[icon];

	return style.icon && TabIcon
		? { icon: <TabIcon/> }
		: '';
} ;

const onChange = (value) => ({
	evt: {
		target: {
			value,
		},
	},
});

const TabButtons = ({
	color, content,
	onClick, orientation, style,
}) =>
	<TabList
		orientation={ orientation }
		textColor={ color }
		indicatorColor={ color }
	>
		{values(map(content, (item, tabKey) =>
			<MuiTab
				key={ tabKey }
				{ ...getLabel(styles[style], item) }
				{ ...getIcon(styles[style], item) }
				value={ tabKey }
				onClick={ () => onClick(tabKey) }
			/>))}
	</TabList>;

const Tab = (context) => {
	const { orientation, content, dir, value: initialValue } = context;

	const [value, selectValue] = useState(initialValue);
	const onClick = (tabKey) => {
		selectValue(tabKey);
		onChange(tabKey);
	};

	return (
		<Box dir={ dir } className={ tabStyle[orientation] }>
			<TabContext value={ value }>
				<TabButtons { ...{ ...context, value, onClick } }/>
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
