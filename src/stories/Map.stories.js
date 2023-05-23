import { React } from 'react';
import LeafletMap from './common/Map/index';

const component = {
	title: 'Display/Map',
	component: LeafletMap,
};

export default component;

const Template = () => <LeafletMap/>;

export const Map = Template.bind({});

Map.args = {

};
