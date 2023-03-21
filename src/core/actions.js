import { peek } from '@laufire/utils/debug';
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
	deleteRow: ({ data, state: { journals }}) => ({
		journals: journals.filter((journal) => journal.id !== data),
	}),
	updateRow: ({ data, state: { journals }}) => ({
		journals: journals.map((journal) => (journal.id !== data.id
			? journal
			: { ...journal, ...peek(data.row) })),
	}),

};

export default actions;
