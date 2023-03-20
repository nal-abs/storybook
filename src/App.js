/* eslint-disable max-lines-per-function */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React, useEffect } from 'react';
import './App.scss';
import DataGrid from './components/Datagrid';
import SplashScreen from './components/SplashScreen';
import SplashScreenManager from './services/SplashScreenManager';
import image from '../src/assets/splash_icon/splash_icon.png';

const App = (context) => {
	const { state: { loading }, actions } = context;

	useEffect(() => {
		actions.setLoading();
		SplashScreenManager.setSplashTimeout(context);
	}, []);

	return (
		<div className="App" role="App">
			{
				loading
					? <SplashScreen backgroundColor="black">
						<img
							className="image fade-in"
							src={ image }
							alt="image"
						/>
					</SplashScreen>
					:	<DataGrid		{ ...{ ...context,
						data: { collection: 'journals' }}	}
					  />
			}
		</div>
	);
};

export default App;
