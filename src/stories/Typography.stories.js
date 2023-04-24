import MuiTypography from '../stories/common/Typography';
import * as React from 'react';

const component = {
	title: 'Display/Typography',
	component: MuiTypography,
};

export default component;

const Template = (args) => <MuiTypography { ...args }/>;

export const Typography = Template.bind({});

Typography.args = {
	children:
				`If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
				Note that text overflow can only happen with block or inline-block level
				elements (the element needs to have a width in order to overflow).`,
	variant: 'h5',
	align: 'left',
	gutterBottom: false,
	noWrap: true,
};
