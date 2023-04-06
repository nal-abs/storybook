import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import * as Icons from '@mui/icons-material';
import { Box, ListItemIcon, ListItemText, Typography } from '@mui/material';

const MenuItems = ({ data, sx, setContent }) =>
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

export default MenuItems;
