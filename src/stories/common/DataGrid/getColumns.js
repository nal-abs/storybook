import React from 'react';
import { map, values } from '@laufire/utils/collection';
import inputType from './inputType';
import { nothing } from '@laufire/utils/fn';
import SchemaInput from './SchemaInput';

const formatMap = {
	'date-time': 'dateTime',
	'date': 'date',
	'time': 'time',
	'phoneNo': 'phoneNo',
};

const widgetMap = {
	password: 'password',
};

const getColumns = (props) => {
	const { columns: { data, editable, width }} = props;

	return values(map(data.properties, (ele, key) => {
		const { format, widget, type } = ele;
		const component = widgetMap[widget] || formatMap[format] || type;
		const getColumnProps = inputType[component] || nothing;
		const schemaProps = { props: props, schema: ele };

		return {
			...ele,
			headerName: ele.title,
			field: key,
			editable: editable,
			width: width,
			renderCell: ({ row, ...rest }) =>
				<SchemaInput { ...{ ...rest, data: row, ...schemaProps } }/>,
			...getColumnProps({ ...props,
				type: component, data: ele, field: key }),
		};
	}));
};

export default getColumns;
