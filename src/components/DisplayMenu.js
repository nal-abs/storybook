import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Check from '@mui/icons-material/Check';

const MenuItems = [
	{ text: 'Inbox',
		icon: <Check/>,
		typography: 5 },
	{ text: 'Drafts' },
	{ text: 'Starred' },
	{ text: 'Junk' },
];

const DisplayMenuItems = ({ handleClose }) => MenuItems.map((item, i) =>
	<MenuItem
		key={ i }
		onClick={ handleClose }
		sx={ { width: '200px' } }
	> <ListItemIcon>{item.icon}</ListItemIcon>
		<ListItemText>{item.text}</ListItemText>
		<Typography>{item.typography}</Typography></MenuItem>);

const DisplayMenu = ({ trigger }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box>
			<Button onClick={ handleClick	}>
				{trigger.children.text}</Button>
			<Menu
				anchorEl={ anchorEl }
				open={ Boolean(open) }
				onClose={ handleClose }
			><DisplayMenuItems { ...{ handleClose } }/></Menu></Box>
	);
};

export default DisplayMenu;
