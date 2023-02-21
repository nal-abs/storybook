import { React } from 'react';
import './App.scss';
import ButtonWrapper from './components /ButtonWrapper';
import TabWrapper from './components /TabsWrapper';
import TypographyWrapper from './components /TypographyWrapper';

const App = (context) =>

	<div className="App" role="App">
		<TabWrapper { ...context }/>
		<ButtonWrapper { ...context }/>
		<TypographyWrapper { ...context }/>
	</div>;

export default App;
