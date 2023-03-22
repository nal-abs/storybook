/* eslint-disable max-lines-per-function */
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, ListItemIcon, ListItemText, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import * as Icons from '@mui/icons-material';
import { useState } from 'react';
import Content from './Content';

const DisplayMenuItems = ({ data, sx, setContent }) =>
	data.map(({ icon, typography, children }, i) => {
		const Icon = Icons[icon];
		const IconF = () => (icon ? <Icon/> : '');

		return (
			<Box key={ i }>
				<MenuItem
					onClick={ () => setContent(children) }
					sx={ sx }
				><ListItemIcon><IconF/></ListItemIcon>
					<ListItemText>{children}</ListItemText>
					<Typography>{typography}</Typography></MenuItem>
			</Box>);
	});

const DisplayMenu = (args) => {
	const { trigger, transformHorizontal,
		transformVertical, vertical, horizontal, data, sx } = args;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [content, setContent] = useState('');
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
				anchorOrigin={ {
					vertical,
					horizontal,
				} }
				transformOrigin={ {
					vertical: transformVertical,
					horizontal: transformHorizontal,
				} }
			><DisplayMenuItems { ...{ data, sx, setContent } }/>
			</Menu>
			{ content && <Content { ...{ content } }/> }
		</Box>
	);
};

export default DisplayMenu;

DisplayMenu.prototype = {
	trigger: PropTypes.object,
};
