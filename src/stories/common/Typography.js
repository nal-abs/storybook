import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography as Text } from '@mui/material';

const Typography = (context) => {
	const { ...args } = context;

	return <Text { ...args }/>;
};

export default Typography;

Typography.propTypes = { context: PropTypes.object };
