/* eslint-disable max-lines-per-function */
import React from 'react';
import { map, values } from '@laufire/utils/collection';
import inputType from './inputType';
import { nothing } from '@laufire/utils/fn';
import SchemaInput from '../SchemaInput';
import buildEvent from '../../helper/buildEvent';

const formatMap = {
	'date-time': 'dateTime',
	'date': 'date',
	'time': 'time',
	'phoneNo': 'phoneNo',
};

const getRenderCellProp = (
	ele, key, { editable, width }
) => ({
	...ele,
	headerName: ele.title,
	field: key,
	editable: editable,
	width: width,
});

const widgetMap = { password: 'password' };

const getColumns = (props) => {
	const { columns: { data }, columns, onChange = nothing } = props;

	return values(map(data.properties, (ele, key) => {
		const { format, widget, type } = ele;
		const component = widgetMap[widget] || formatMap[format] || type;
		const getColumnProps = inputType[component] || nothing;

		return {
			...getRenderCellProp(
				ele, key, columns
			),
			renderCell: (params) =>
				<SchemaInput { ...{
					value: params.value, schema: ele,
					onChange: (evt) => {
						onChange(buildEvent({
							...params.row,
							[params.field]: evt.target.value,
						}));
					},
				} }
				/>,
			...getColumnProps(),
		};
	}));
};

export default getColumns;
