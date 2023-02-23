import { React } from 'react';
import './App.scss';
import ButtonWrapper from './components /ButtonWrapper';
import Drawer from './components /Drawer';
import TabWrapper from './components /TabsWrapper';

const App = (context) =>

	<div className="App" role="App">
		<TabWrapper { ...context }/>
		<ButtonWrapper { ...context }/>
		<Drawer { ...{ ...context,
			props: {
				direction: 'right',
				lists: [
					{ text: 'Inbox', icon: 'Add', typography: 5 },
					{ text: 'starred', icon: 'Delete', typography: 3 },
				],
			}} }
		/>
	</div>;

export default App;
