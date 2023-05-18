import { pick } from '@laufire/utils/collection';

const dataFormatter = {
	enum: (items) => ({
		enum: items.enum,
	}),
	oneOf: (items) => {
		const array = items.oneOf;

		return {
			enum: pick(array, 'const'),
		};
	},
};

export default dataFormatter;
