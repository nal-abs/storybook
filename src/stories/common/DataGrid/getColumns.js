import { map, values } from '@laufire/utils/collection';
import inputType from './inputType';

const singleSelect = (ele) => ele.enum && {
	type: 'singleSelect',
	valueOptions: ele.enum,
};

const Format = {
	'date-time': 'dateTime',
	'date': 'date',
	'time': 'time',
};

const getColumns = (props) => {
	const { columns: { data, editable, width }} = props;

	return values(map(data.properties, (ele, key) => {
		const { format, type } = ele;
		const parameter = Format[format] || type;

		return {
			...ele,
			headerName: ele.title,
			field: key,
			editable: editable,
			width: width,
			...singleSelect(ele),
			...inputType[parameter] && inputType[parameter]({ ...props,
				type: parameter, data: ele, field: key }),
		};
	}));
};

export default getColumns;
