import { React } from 'react';
import './App.scss';
import DataGrid from './components/Datagrid';

const App = (context) => <div className="App" role="App">
	<DataGrid { ...{ ...context,
		data: {
			collection: 'journals',
		}} }
	/>
</div>;

export default App;
