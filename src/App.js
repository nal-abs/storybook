import { React } from 'react';
import './App.scss';
import Journal from './components/Journal';

const App = (context) => <div className="App" role="App">
	<Journal { ...{
		...context,
		data: { collection: 'journals' },
	} }
	/>
</div>;

export default App;
