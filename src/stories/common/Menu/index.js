import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MuiMenu from './MuiMenu';
import Content from '../Content';

const Menu = (args) => {
	const { trigger: { children: { text }}} = args;
	const [content, setContent] = useState('');
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return <Box>
		<Button onClick={ handleClick }>
			{text}</Button>
		<MuiMenu { ...{ args, handleClose, setContent, anchorEl } }/>
		{content && <Content { ...{ content } }/>}
	</Box>;
}
	;

export default Menu;

Menu.prototype = {
	trigger: PropTypes.object,
};
