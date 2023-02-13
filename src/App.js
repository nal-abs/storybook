import { React } from 'react';
import './App.scss';
import DisplayTab from './components /DisplayTab';

const App = (context) =>
	<div className="App" role="App">
		<DisplayTab { ...{ ...context,
			prop: {
			}} }
		/>
	</div>;

export default App;
