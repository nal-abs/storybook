const actions = {
	selectedTab: (context) => ({
		value: context.data,
	}),
	openMenu: (context) => ({
		open: context.data,
	}),
	handleClose: () => ({
		open: null,
	}),
};

export default actions;
