const updateRow = (context) => {
	const { data, field, props: { setRows }, value } = context;

	setRows((rows) => rows.map((row) => (row.id === data.id
		? { ...row, [field]: value }
		: row)));
};

export default updateRow;
