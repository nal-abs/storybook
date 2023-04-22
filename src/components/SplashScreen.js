import { Paper } from '@mui/material';
import { React } from 'react';

const SplashScreen = ({ backgroundColor, children }) =>
	<Paper
		sx={ {
			bgcolor: backgroundColor,
		} }
	>{children}
	</Paper>;

export default SplashScreen;
