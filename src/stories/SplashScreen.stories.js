import * as React from 'react';
import SplashScreen from './SplashScreen';

export default {
	title: 'stories/SplashScreen',
	component: SplashScreen,
};

const Template = (args) => <SplashScreen { ...args }/>;

export const muiSplash = Template.bind({});

muiSplash.args = {};
