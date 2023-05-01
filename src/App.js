import { React } from 'react';
import './App.scss';
import ReactTable from './stories/common/reactTable';

const App = (context) => <div className="App">
	<ReactTable { ...context }/>
</div>;

export default App;
