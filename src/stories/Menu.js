import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, ListItemIcon, ListItemText, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import * as Icons from '@mui/icons-material';

const DisplayMenuItems = ({ handleClose, data, sx }) =>
	data.map(({ icon, typography, children }, i) => {
		const Icon = Icons[icon];
		const IconF = () => (icon ? <Icon/> : '');

		return (
			<MenuItem
				key={ i }
				onClick={ handleClose }
				sx={ sx }
			><ListItemIcon><IconF/></ListItemIcon>
				<ListItemText>{children}</ListItemText>
				<Typography>{typography}</Typography></MenuItem>);
	});

const DisplayMenu = ({ trigger, data, sx }) => {
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
			><DisplayMenuItems { ...{ data, handleClose, sx } }/></Menu></Box>
	);
};

export default DisplayMenu;

DisplayMenu.prototype = {
	trigger: PropTypes.object,
};
