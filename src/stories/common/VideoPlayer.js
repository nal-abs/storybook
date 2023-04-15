/* eslint-disable max-lines-per-function */
import { nothing } from '@laufire/utils/fn';
import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const buildEvent = (value) => ({
	target: {
		value,
	},
});
// Lazy load the YouTube player
const VideoPlayer = ({ onChange = nothing,
	...args }) => {
	const [value, setValue] = useState(args);

	const handleEvent = (state) => {
		setValue({ ...value, ...state });
		onChange(buildEvent(value));
	};

	return (
		<ReactPlayer
			{ ...args }
			onReady={ () => handleEvent({ status: 'ready' }) }
			onStart={ () => handleEvent({ status: 'playing' }) }
			onPlay={ () => handleEvent({ status: 'playing' }) }
			onProgress={ (state) => handleEvent({
				played: state.playedSeconds,
				loaded: state.loadedSeconds,
				status: 'playing',
			}) }
			onSeek={ () => handleEvent({ played: value.played }) }
			onPause={ () => handleEvent({ status: 'paused' }) }
			onDuration={ (duration) => handleEvent({ duration }) }
			onPlaybackRateChange={ (speed) =>
				handleEvent({ playbackRate: parseFloat(speed) }) }
			onEnded={ () => handleEvent({ status: 'ended' }) }
			onEnablePIP={ () => handleEvent({ pip: true }) }
			onDisablePIP={ () => handleEvent({ pip: false }) }
		/>
	);
};

export default VideoPlayer;
