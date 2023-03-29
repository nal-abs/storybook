/* eslint-disable max-lines-per-function */
import { React } from 'react';
import './App.scss';
import VideoPlayer from './components/VideoPlayer';
import Tab from '../src/stories/common/Tab';

const App = (context) => <div className="App" role="App">
	<Tab { ...{ ...context,
		contents: {
			Journal: {
				label: 'Journal',
				component: 'Journal',
				props: { ...{
					...context,
					data: { collection: 'journals' },
				}},
			},
			Ledger: {
				label: 'Ledger',
				component: 'Ledger',
				props: { ...{
					...context,
					data: { collection: 'ledgers' },
				}},
			},
		},
		value: 'Journal',
		style: 'textOnly' } }
	/>
	<VideoPlayer { ...{ ...context, url: 'https://youtu.be/D-rHu8vxrHI' } }/>
</div>;

export default App;
