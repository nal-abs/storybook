/* eslint-disable max-lines-per-function */
import { map } from '@laufire/utils/collection';
import { Box, Button, Drawer as MuiDrawer, List, ListItem, ListItemButton,
	ListItemText } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const DisplayList = ({ props: { direction, lists }, anchor, setAnchor }) =>
	<Box onClick={ () => setAnchor({ ...anchor, [direction]: false }) }><List>
		{map(lists, (text) =>
			<ListItem key={ text }>
				<ListItemButton>
					<ListItemText primary={ text }/>
				</ListItemButton>
			</ListItem>)}
	</List></Box>;

const Drawer = (context) => {
	const { props: { direction }, props } = context;
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
			<DisplayList { ...{ props, anchor, setAnchor } }/>
		</MuiDrawer></Box>;
};

export default Drawer;
