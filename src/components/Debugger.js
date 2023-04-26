import { React } from 'react';

const Debugger = ({ data }) =>
	<code>
		{JSON.stringify(data)}
	</code>;

export default Debugger;
