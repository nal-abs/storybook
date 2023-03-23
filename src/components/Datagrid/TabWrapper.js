/* eslint-disable max-lines-per-function */
import * as React from 'react';
import Tab from '../../stories/common/Tab';

const TabWrapper = (context) =>
	<Tab { ...{ ...context,
		orientation: 'horizontal',
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
