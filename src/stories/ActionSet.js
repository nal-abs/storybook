import * as React from 'react';
import Menu from './Menu';
import SpeedDial from './SpeedDial';

const Navigation = {
	menu: Menu,
	speedDial: SpeedDial,
};

const ActionSet = (args) => {
	const { type } = args;

	const Component = Navigation[type];

	return <Component { ...args }/>;
};

export default ActionSet;
