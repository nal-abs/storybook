import { reduce } from '@laufire/utils/collection';

const dataTable = {
	getColumns: (args) => reduce(
		args.schema, (
			acc, val, key
		) => acc.concat({
			...val,
			accessor: key,
		}), []
	),
};

export default dataTable;
