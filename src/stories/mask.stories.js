import { React } from 'react';
import Mask from './common/Mask';
import image from '../assets/splash_icon/splash_icon.png';
import { peek } from '@laufire/utils/debug';

const component = {
	title: 'components/Mask',
	component: Mask,
};

export default component;

const Template = (args) => <Mask { ...args }/>;

export const mask = Template.bind({});

mask.args = {
	children: <img className="child" src={ image } alt="img"/>,
	onChange: peek,
};
