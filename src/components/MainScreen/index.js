import { Fragment } from 'react/cjs/react.production.min';
import SearchBar from './SearchBar';
import { React } from 'react';
import Location from './Location';
import Tabs from './Tabs';

const MainScreen = () =>
	<Fragment>
		<SearchBar/>
		<Location/>
		<Tabs/>
	</Fragment>;

export default MainScreen;
