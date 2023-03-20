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
};

export default actions;
