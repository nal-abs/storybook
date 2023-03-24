import { peek } from '@laufire/utils/debug';
import { React } from 'react';
import './App.scss';
import Journal from './components/Journal';

const App = (context) => {
	const { state } = context;

	peek(state.journals.length);
	return <div className="App" role="App">
		<Journal { ...{
			...context,
			data: { collection: 'journals' },
		} }
		/>
	</div>;
};

export default App;
