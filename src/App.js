import { React } from 'react';
import './App.scss';
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
	</div>;
};

export default App;
