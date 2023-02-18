import { React } from 'react';
import './App.scss';
import TabExample from './components /TabsExample';

const App = (context) =>

	<div className="App" role="App">
		<TabExample { ...context }/>
	</div>;

export default App;
