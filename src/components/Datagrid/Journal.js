/* eslint-disable max-lines-per-function */
import DataGrid from '../../stories/common/DataGrid';
import React from 'react';

const Journal = (context) => {
	const { data: { collection }, config, state } = context;

	return (
		<DataGrid { ...{ values: state[collection],
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
