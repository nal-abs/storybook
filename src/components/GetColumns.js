import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';

const GetColumns = (data) => values(map(data, (ele, key) => ({
	...ele,
	headerName: ele.title,
	field: key,
})));

export default GetColumns;
