/* eslint-disable max-lines-per-function */
import * as React from 'react';
import Tab from '../../stories/Tab';

const TabWrapper = (context) =>
	<Tab { ...{ ...context,
		orientation: 'vertical',
		color: 'secondary', variant: 'scrollable',
		data: [
			{
				label: 'Journals',
			},
			{
				label: 'Ledgers',
			},
		],
		content: {
			Journals: { component: 'DataGrid',
				data: {
					collection: 'journals',
				}},
			Ledgers: { component: 'DataGrid',
				data: {
					collection: 'ledgers',
				}},
		}} }
	/>;

export default TabWrapper;
