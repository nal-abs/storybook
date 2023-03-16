import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';

const DataType = {
	date: (ele) => ({ type: ele,
		valueGetter: ({ value }) => value && new Date(value) }),
};

const GetColumns = (data) => values(map(data, (ele, key) => {
	const { format } = ele;

	return {
		...ele,
		headerName: ele.title,
		field: key,
		editable: true,
		width: 120,
		...DataType[format] && DataType[format](format),
	};
}));

export default GetColumns;
