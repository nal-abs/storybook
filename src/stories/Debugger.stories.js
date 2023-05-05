import * as React from 'react';
import Debugger from '../stories/common/Debugger';

const component = {
	title: 'stories/debugger',
	component: Debugger,
};

export default component;

const Template = (args) =>
	<Debugger { ...args }/>;

export const deBugger = Template.bind({});

deBugger.args = {
	value: 'ABC',
};
