import { React } from 'react';
import './App.scss';
import DisplayTab from './components /DisplayTab';

const App = (context) =>
	<div className="App" role="App">
		<DisplayTab { ...{ ...context,
			prop: {
				orientation: 'vertical',
				color: 'primary', variant: 'scrollable',
			}} }
		/>
	</div>;

export default App;
