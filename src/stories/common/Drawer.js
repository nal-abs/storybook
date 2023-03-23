/* eslint-disable react/jsx-indent */
import { map } from '@laufire/utils/collection';
import { Box, Button, Drawer as MuiDrawer, List, ListItem, ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import * as Icons from '@mui/icons-material';
import PropTypes from 'prop-types';

const DisplayList = ({ direction, lists,
	anchor, setAnchor }) =>
	<Box onClick={ () => setAnchor({ ...anchor, [direction]: false }) }>
		<List>
			{map(lists, ({ icon, text, typography }) => {
				const Icon = Icons[icon];
				const IconF = icon ? <Icon/> : '';

				return <ListItem key={ text } sx={ { width: '200px' } }>
					<ListItemButton>
						<ListItemIcon>{IconF}</ListItemIcon>
						<ListItemText primary={ text }/>
						<Typography>{typography}</Typography>
					</ListItemButton>
				</ListItem>;
			})}
		</List></Box>;

const Drawer = (context) => {
	const { direction, lists } = context;
	const [anchor, setAnchor] = useState({
		left: false,
		right: false,
		bottom: false,
		top: false,
	});

	return <Box>
		<Button
			onClick={ () => setAnchor({ ...anchor, [direction]: true }) }
		><MenuIcon/></Button>
		<MuiDrawer
			anchor={ direction }
			open={ anchor[direction] }
			onClose={ () => setAnchor({ ...anchor, [direction]: false }) }
		>
			<DisplayList { ...{ direction, lists, anchor, setAnchor } }/>
		</MuiDrawer></Box>;
};

export default Drawer;

Drawer.prototype = {
	context: PropTypes.object,
	trigger: PropTypes.object,
};
