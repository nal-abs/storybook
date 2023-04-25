/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import Tab from '../src/stories/common/Tab/index';
import validatePhoneNumber from './stories/common/DataGrid/validatePhoneNumber';

const getTabProp = (context) => ({ ...context,
	contents: {
		Journal: {
			label: 'Journal',
			component: 'Journal',
			props: { ...{ ...context, data: { collection: 'journals' }}},
		},
		Ledger: {
			label: 'Ledger',
			component: 'Ledger',
			props: { ...{ ...context, data: { collection: 'ledgers' }}},
		},
	},
	value: 'Journal',
	style: 'textOnly' });

const schema = {
	type: 'string',
	format: 'phoneNo',
};
const value = '(123) 456-7891';

const App = (context) => <div className="App">
	<Tab { ...getTabProp(context) }/>
	{validatePhoneNumber(schema, value)}
</div>;

export default App;
