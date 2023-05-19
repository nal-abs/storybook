/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React, useEffect, useState } from 'react';
import { useMap, Marker, Popup, Circle } from 'react-leaflet';

const Location = () => {
	const map = useMap();
	const [coordinates, setCoordinates] = useState(null);

	useEffect(() => {
		map.locate({
			setView: true,
		});
		map.on('locationfound', (event) => {
			setCoordinates(event.latlng);
		});
	}, [map]);

	return coordinates
		? <>
			<Circle
				center={ coordinates }
				weight={ 2 }
				color="red"
				fillColor="red"
				sfillOpacity={ 0.1 }
				radius={ 500 }
			/>
			<Marker position={ coordinates }>
				<Popup>You are here</Popup>
			</Marker>
		</>
		: null;
};

export default Location;
