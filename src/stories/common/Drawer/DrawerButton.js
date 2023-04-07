import * as React from 'react';
import IconButton from '../IconButton';

const DrawerButton = ({ setAnchor, anchor, direction }) =>
	<IconButton
		{ ...{
			icon: 'Menu', color: 'primary',
			onClick: () => setAnchor({ ...anchor, [direction]: true }),
		} }
	/>;

export default DrawerButton;
