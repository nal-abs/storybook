import { React } from 'react';
import './App.scss';
import ButtonWrapper from './components /ButtonWrapper';
import TabWrapper from './components /TabsWrapper';

const App = (context) =>

	<div className="App" role="App">
		<TabWrapper { ...context }/>
		<ButtonWrapper { ...context }/>
	</div>;

export default App;
