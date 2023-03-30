/* eslint-disable max-lines-per-function */
import React from 'react';
import DataGrid from '../stories/common/DataGrid/index';

const Ledger = (context) => {
	const { data: { collection }, config, state } = context;

	return (
		<DataGrid { ...{
			value: state[collection],
			columns: {
				width: 80,
				editable: true,
				data: config[collection],
				actions: [
					{
						icon: 'Edit',
						action: 'editRow',
					},
					{
						icon: 'Delete',
						action: 'deleteRow',
					},
				],
			},
			style: {
				width: '100%',
				height: 300,
			},
		} }
		/>);
};

export default Ledger;
