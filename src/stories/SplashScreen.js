import PropTypes from 'prop-types';
import { Container as MuiContainer } from '@mui/material';
import * as React from 'react';

const SplashScreen = (context) => {
	const { backgroundColor = 'black', children = 'HELLO', ...args } = context;

	return (
		<MuiContainer
			{ ...args }
			disableGutters={ true }
			maxWidth={ false }
			sx={ {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				bgcolor: { backgroundColor },
				color: 'white',
			} }
		>
			{children}
		</MuiContainer>
	);
};

export default SplashScreen;

SplashScreen.propTypes = {
	context: PropTypes.object,
};
