import { pretty } from '@laufire/utils/debug';
import * as React from 'react';

const Debugger = (props) =>
	<pre>
		{pretty(props)}
	</pre>;

export default Debugger;
