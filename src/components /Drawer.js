import { map } from '@laufire/utils/collection';
import { Box, Button, Drawer as MuiDrawer, List, ListItem, ListItemButton,
	ListItemText } from '@mui/material';
import * as React from 'react';

const DisplayList = ({ actions, props: { direction, lists }}) =>
	<Box onClick={ () => actions.closeDrawer(direction) }><List>
		{map(lists, (text) =>
			<ListItem key={ text }>
				<ListItemButton>
					<ListItemText primary={ text }/>
				</ListItemButton>
			</ListItem>)}
	</List></Box>;

const Drawer = (context) => {
	const { actions, state: { anchor, open }, props: { direction }} = context;

	return <Box>
		<Button
			onClick={ () => actions.setDirection(direction) }
		>{direction}</Button>
		<MuiDrawer
			anchor={ anchor }
			open={ open[anchor] }
			sx={ { width: '500px' } }
			onClose={ () => actions.closeDrawer(direction) }
		>
			<DisplayList { ...context }/></MuiDrawer></Box>;
};

export default Drawer;
