import Typography from './Typography';
import * as React from 'react';

export default {
	title: 'stories/Typography',
	component: Typography,
};

const Template = (args) => <Typography { ...args }/>;

export const typography = Template.bind({});

typography.args = {
	children:
				`If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
				Note that text overflow can only happen with block or inline-block level
				elements (the element needs to have a width in order to overflow).`,
	variant: 'h5',
	align: 'left',
	gutterBottom: false,
	noWrap: true,
};
