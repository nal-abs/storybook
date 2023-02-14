import { React } from 'react';
import './App.scss';
import DisplayMenu from './components /DisplayMenu';
import DisplayTab from './components /DisplayTab';

const App = (context) => {
	const { config: { TabItems }} = context;

	return <div className="App" role="App">
		<DisplayTab { ...{
			...context,
			prop: {
				orientation: 'vertical',
				color: 'secondary', variant: 'scrollable',
				data: TabItems,
			},
		} }
		/>
		<DisplayMenu { ...{ ...context,
			trigger: {
				children: {	text: 'Menu' },
			}} }
		/>
	</div>;
};

export default App;
