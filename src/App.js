import { React } from 'react';
import './App.scss';
import DataGrid from './components/DataGrid';
import GetColumns from './components/GetColumns';

const App = (context) => {
	const { config: { data: { properties }}} = context;

	return <div className="App" role="App">
		<DataGrid { ...{ ...context, columns: GetColumns(properties) } }/>
	</div>;
};

export default App;
