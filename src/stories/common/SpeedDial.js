/* eslint-disable max-lines-per-function */
import * as React from 'react';
import Box from '@mui/material/Box';
import { SpeedDial as MuiSpeedDial } from '@mui/material';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import * as Icons from '@mui/icons-material';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

const IconF = (ele) => {
	const Icon = Icons[ele.icon];

	return {
		icon: Icon && <Icon/>,
		tooltipTitle: ele.children,
	};
};

const openIcon = (icon) => {
	const Icon = Icons[icon];

	return { openIcon: Icon && <Icon/> };
};

const SpeedDial = (args) => {
	const { data, hidden, direction, icon,
		...rest } = args;
	const [value, setValue] = React.useState('');

	return <Box>
		<MuiSpeedDial
			ariaLabel="SpeedDial basic example"
			hidden={ hidden }
			direction={ direction }
			icon={ <SpeedDialIcon { ...openIcon(icon) }/> }
		>
			{data.map((ele, i) =>
				<SpeedDialAction
					key={ i }
					{ ...{ ...IconF(ele), ...rest } }
					onClick={ () => setValue(ele.children) }
				/>)}
		</MuiSpeedDial><Box>{value}</Box>
	</Box>;
}
	;

export default SpeedDial;
