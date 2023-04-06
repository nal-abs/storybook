/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { nothing } from '@laufire/utils/fn';
import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const transformEvent = (value) => ({
	target: {
		value,
	},
});
// Lazy load the YouTube player
const VideoPlayer = ({ url, pip, playing, controls,
	light, loop, playbackRate, volume, muted,
	onChange = nothing, value: initialValue, ...args }) => {
	const [value, setValue] = useState(initialValue);

	const handleOnReadyStart = (status) => {
		setValue(status);
		onChange(transformEvent({ ...value, ...status }));
	};

	const handleOnPlayPause = (status) => {
		setValue(status);
		onChange(transformEvent({ ...value, playing: !value.playing }));
	};

	const handleOnProgress = (state) => {
		setValue({ progress: state });
		onChange(transformEvent({ ...value, progress: state }));
	};

	const handleOnSeek = () => {
		const seconds = value.progress.playedSeconds;

		setValue({ played: seconds });
		onChange(transformEvent({ ...value, played: seconds }));
	};

	const handleOnDuration = (duration) => {
		setValue({ duration });
		onChange(transformEvent({ ...value, duration }));
	};

	const handlePlayBackRateChange = (speed) => {
		setValue({ playbackRate: parseFloat(speed) });
		onChange(transformEvent({ ...value, playbackRate: parseFloat(speed) }));
	};

	const handleOnEnd = () => {
		setValue({ playing: loop });
		onChange(transformEvent({ ...value, playing: loop }));
	};

	const handleOnEnableDisablePip = (status) => {
		setValue(status);
		onChange(transformEvent({ ...value, ...status }));
	};

	return (
		<ReactPlayer
			{ ...args }
			url={ url }
			pip={ pip }
			playing={ playing }
			controls={ controls }
			light={ light }
			loop={ loop }
			playbackRate={ playbackRate }
			volume={ volume }
			muted={ muted }
			onReady={ () => handleOnReadyStart({ ready: 'ready' }) }
			onStart={ () => handleOnReadyStart({ start: 'start' }) }
			onPlay={ () => handleOnPlayPause({ playing: true }) }
			onProgress={ (state) => handleOnProgress(state) }
			onSeek={ () => handleOnSeek() }
			onPause={ () => handleOnPlayPause({ playing: false }) }
			onDuration={ (duration) => handleOnDuration(duration) }
			onPlaybackRateChange={ (speed) => handlePlayBackRateChange(speed) }
			onEnded={ () => handleOnEnd() }
			onEnablePIP={ () => handleOnEnableDisablePip({ pip: true }) }
			onDisablePIP={ () => handleOnEnableDisablePip({ pip: false }) }
		/>
	);
};

export default VideoPlayer;
