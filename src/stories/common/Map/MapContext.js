/* eslint-disable no-magic-numbers */
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { React } from 'react';
import tileLayer from './tileLayer';
import Location from './Location';

const center = [52.22977, 21.01178];
const MapContext = () =>
	<MapContainer
		center={ center }
		zoom={ 18 }
		scrollWheelZoom={ false }
		style={ { height: '100vh' } }
	>
		<TileLayer { ...tileLayer }/>
		<Location/>
	</MapContainer>
  ;

export default MapContext;
