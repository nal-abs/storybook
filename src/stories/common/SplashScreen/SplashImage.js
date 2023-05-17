import { React } from 'react';
import image from '../../../assets/splash_icon/Splash_rotate.gif';

const SplashImage = () =>
	<img
		alt="SplashScreen"
		src={ image }
		style={ { width: '90vw' } }
	/>;

export default SplashImage;
