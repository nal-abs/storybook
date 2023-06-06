import React from 'react';
import DisplayContainer from './common/Container';
import { Box } from '@mui/material';

const component = {
	title: 'Display/Container',
	component: DisplayContainer,
};

export default component;

const Template = (args) => <DisplayContainer { ...args }/>;

export const Container = Template.bind({});

Container.args = {
	children: <Box sx={ { background: '#766b6b', height: '50vh' } }/>,
	style: {},
};
