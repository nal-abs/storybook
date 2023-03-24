import DirectionManager from '../services/DirectionManager';

const actions = {
	selectedTab: (context) => ({
		value: context.data,
	}),
	setDirection: (context) => ({
		open: DirectionManager.setDirection(context),
		anchor: context.data,
	}),
	closeDrawer: (context) => ({
		open: DirectionManager.closeDrawer(context),
	}),
	setLoading: () => ({
		loading: true,
	}),
	endLoading: () => ({
		loading: false,
	}),
	deleteRow: ({ data: { rows, value, name }}) => ({
		[name]: rows.filter((row) => row.id !== value.id),
	}),
	updateRow: ({ data: { rows, value, name }}) => ({
		[name]: rows.map((row) => (row.id !== value.id
			? row
			: { ...row, ...value.row })),
	}),

};

export default actions;
