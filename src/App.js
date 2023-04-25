import { React } from 'react';
import './App.scss';
import DataGrid from './components/dataGrid';

const App = (context) => <div className="App">
	<DataGrid { ...context }/>
</div>;

export default App;
