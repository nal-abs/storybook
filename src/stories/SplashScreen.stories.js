import * as React from 'react';
import SplashImage from '../stories/examples/SplashImage';
import SplashText from '../stories/examples/SplashText';
import SplashScreen from '../stories/common/SplashScreen';

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
