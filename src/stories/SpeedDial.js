import * as React from 'react';
import Box from '@mui/material/Box';
import { SpeedDial as MuiSpeedDial } from '@mui/material';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import * as Icons from '@mui/icons-material';

const IconF = (action) => {
	const Icon = Icons[action.icon];

	return {
		icon: Icon && <Icon/>,
		tooltipTitle: action.name,
	};
};

const openIcon = (icon) => {
	const Icon = Icons[icon];

	return { openIcon: Icon && <Icon/> };
};

const SpeedDial = (args) => {
	const { actions, direction, hidden, icon,
		...rest } = args;

	return <Box>
		<MuiSpeedDial
			ariaLabel="SpeedDial basic example"
			icon={ <SpeedDialIcon { ...openIcon(icon) }/> }
			hidden={ hidden }
			direction={ direction }
		>
			{actions.map((action, i) =>
				<SpeedDialAction
					key={ i }
					{ ...{ ...IconF(action), ...rest } }
				/>)}
		</MuiSpeedDial>
	</Box>;
}
	;

export default SpeedDial;
