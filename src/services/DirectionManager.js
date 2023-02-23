const DirectionManager = {
	setDirection: ({ state: { open }, data }) => ({
		...open, [data]: true,
	}),
	closeDrawer: ({ state: { open }, data }) => ({
		...open, [data]: false,
	}),
};

export default DirectionManager;
