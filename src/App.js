import { React } from 'react';
import './App.scss';
import Journal from './components/Journal';
import VideoPlayer from './components/VideoPlayer';

const App = (context) => <div className="App" role="App">
	<Journal { ...{
		...context,
		data: { collection: 'journals' },
	} }
	/>
	<VideoPlayer { ...{ ...context, url: 'https://youtu.be/D-rHu8vxrHI' } }/>
</div>;

export default App;
