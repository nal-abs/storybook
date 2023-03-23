/* eslint-disable max-lines-per-function */
import React from 'react';
import DataGrid from '../stories/common/DataGrid';

const Journal = (context) => {
	const { data: { collection }, config, state } = context;

	return (
		<DataGrid { ...{ value: state[collection],
			columns: {
				width: 100,
				editable: true,
				data: config[collection],
				actions: {
					Edit: {
						icon: 'Edit',
					},
					Delete: {
						icon: 'Delete',
					},
				},
			},
			style: {
				width: '100%',
				height: 300,
			}} }
		/>);
};

export default Journal;
