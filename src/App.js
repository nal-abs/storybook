import { React } from 'react';
import './App.scss';
import DataGrid from './components/DataGrid';
import GetColumns from './components/GetColumns';

const App = (context) => {
	const { config,
		state: { journals, ledgers }} = context;

	return <div className="App" role="App">
		<DataGrid { ...{ ...context,
			columns: GetColumns(config.journals.properties),
			rows: journals } }
		/>
		<DataGrid { ...{ ...context,
			columns: GetColumns(config.ledgers.properties),
			rows: ledgers } }
		/>
	</div>;
};

export default App;
