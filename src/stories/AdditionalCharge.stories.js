import React from 'react';
import AdditionalCharge from '../stories/common/AdditionalCharge';

export default {
	title: 'Atoms/AdditionalCharge',
	component: AdditionalCharge,
};

const Template = (args) => <AdditionalCharge { ...args }/>;

export const additionalCharge = Template.bind({});

additionalCharge.args = {
	item: {
		additionalCharge: 2000,
		priceNotes: 'hi',
	},
};
