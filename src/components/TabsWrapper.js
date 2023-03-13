import Tabs from '../stories/Tab';
import * as React from 'react';

const TabWrapper = (context) =>
	<Tabs { ...{ ...context,
		orientation: 'vertical',
		color: 'secondary', variant: 'scrollable',
		data: [
			{
				label: 'TodoPane',
				component: 'item1',
			},
			{
				label: 'TaskPane',
				component: 'item2',
			},
		] } }
	/>;

export default TabWrapper;
