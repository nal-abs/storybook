import { React } from 'react';
import './App.scss';
import TabWrapper from './components/Datagrid/TabWrapper';

const App = (context) => <div className="App" role="App">
	<TabWrapper { ...context }/>
</div>;

export default App;
