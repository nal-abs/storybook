import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

const MenuItems = ['Inbox', 'Drafts', 'Starred', 'Junk'];

const DisplayMenuItems = ({ handleClose }) => MenuItems.map((item, i) =>
	<MenuItem
		key={ i }
		onClick={ handleClose }
	>{item}</MenuItem>);

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
