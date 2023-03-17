/* eslint-disable no-mixed-spaces-and-tabs */
import { React, useEffect, useState } from 'react';
import './App.scss';
import DataGrid from './components/Datagrid';
import image from '../src/assets/splash_icon/splash_icon.png';

const milliseconds = 8000;
// eslint-disable-next-line max-lines-per-function
const App = (context) => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, milliseconds);
	}, []);
	return (
		<div className="App" role="App">
			{
				loading
					? <div className="splash">
						<img
							className="image fade-in"
							src={ image }
							alt="image"
						/>
					</div>
					:				<DataGrid		{ ...{ ...context,
						data:
						{
							collection: 'journals',
						}}
					}
					     />
			},
		</div>
	);
};

export default App;
