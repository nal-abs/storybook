import * as React from 'react';
import SplashImage from '../stories/common/SplashScreen/SplashImage';
import SplashText from '../stories/common/SplashScreen/SplashText';
import SplashScreen from '../stories/common/SplashScreen/index';

const component = {
	title: 'stories/SplashScreen',
	component: SplashScreen,
	argTypes: {
		child: {
			control: {
				type: 'select',
				options: ['SplashImage', 'SplashText'],
			},
		},
	},
};

export default component;

const childComponents = {
	SplashImage,
	SplashText,
};

const Template = ({ child, text, ...rest }) => {
	const SelectedChild = childComponents[child];

	return <SplashScreen { ...rest }>
		<SelectedChild>{text}</SelectedChild>
	</SplashScreen>;
};

export const muiSplash = Template.bind({});

muiSplash.args = {
	textColor: 'white',
	backgroundColor: 'black',
	child: 'SplashImage',
	text: '',
};
