/* eslint-disable max-lines-per-function */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React, useEffect } from 'react';
import './App.scss';
import DataGrid from './components/Datagrid';
import SplashScreenManager from './services/SplashScreenManager';
import image from '../src/assets/splash_icon/splash_icon.png';
import SplashScreen from './stories/SplashScreen';

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
					? <SplashScreen { ...{ ...context,
						 backgroundColor: 'black' } }
						 >
						<img
							className="image fade-in"
							src={ image }
							alt="image"
						/>
					</SplashScreen>
					:		<DataGrid { ...{
						...context,
						data: {
							collection: 'journals',
						},
						style: {
							width: '100%',
							height: 300,
						},
					} }
					   />
			}
		</div>
	);
};

export default App;
