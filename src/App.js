/* eslint-disable max-lines-per-function */
import { React } from 'react';
import './App.scss';
import Tab from '../src/stories/common/Tab/index';

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
</div>;

export default App;
