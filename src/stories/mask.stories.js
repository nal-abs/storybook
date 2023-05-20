import { React } from 'react';
import Mask from './common/Mask';
import child from './assets/child.png';
import parent from './assets/mask.png';
import { peek } from '@laufire/utils/debug';

const component = {
	title: 'components/Mask',
	component: Mask,
};

export default component;

const Template = (args) => <Mask { ...args }/>;

export const mask = Template.bind({});

mask.args = {
	children: <img className="child" src={ child } alt="img"/>,
	onChange: peek,
	src: parent,
	style: {},
};
