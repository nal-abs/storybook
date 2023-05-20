import { React } from 'react';
import MaskComponent from './common/Mask';
import child from './assets/child.png';
import parent from './assets/mask.png';
import { peek } from '@laufire/utils/debug';

const component = {
	title: 'components/Mask',
	component: MaskComponent,
};

export default component;

const Template = (args) => <MaskComponent { ...args }/>;

export const Mask = Template.bind({});

Mask.args = {
	children: <img className="child" src={ child } alt="img"/>,
	onChange: peek,
	src: parent,
	style: {},
};
