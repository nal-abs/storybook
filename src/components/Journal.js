/* eslint-disable max-lines-per-function */
import React from 'react';
import DataGrid from '../stories/common/DataGrid';

const Journal = (context) => {
	const { data: { collection }, config, state, actions } = context;
	const editRow = (item) => actions.updateRow({
		rows: state[collection],
		value: item,
		name: collection,
	});
	const deleteRow = (item) => actions.deleteRow({
		rows: state[collection],
		value: item,
		name: collection,
	});

	return (
		<DataGrid { ...{
			value: state[collection],
			columns: {
				width: 100,
				editable: true,
				data: config[collection],
				actions: [
					{
						icon: 'Edit',
						action: editRow,
					},
					{
						icon: 'Delete',
						action: deleteRow,
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

export default Journal;
