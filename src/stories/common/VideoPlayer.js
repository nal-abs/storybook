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
			onReady={ () => {
				setValue({ ready: 'ready' });
				onChange(transformEvent({ ...value, ready: 'ready' }));
			} }
			onStart={ () => {
				setValue({ start: 'start' });
				onChange(transformEvent({ ...value, start: 'start' }));
			} }
			onPlay={ () => {
				setValue({ playing: true });
				onChange(transformEvent({ ...value,
					playing: !value.playing }));
			} }
			onProgress={ ({ target }) => {
				setValue({ played: parseFloat(target.value) });
				onChange(transformEvent({
					played: parseFloat(target.value),
				}));
			} }
			onSeek={ ({ target }) => {
				setValue({ played: parseFloat(target.value) });
				onChange(transformEvent({ ...value,
					played: parseFloat(target.value) }));
			} }
			onPause={ () => {
				setValue({ playing: false });
				onChange(transformEvent({ ...value,
					playing: !value.playing }));
			} }
			onDuration={ (duration) => {
				setValue({ duration });
				onChange(transformEvent({ ...value, duration }));
			} }
			onPlaybackRateChange={ (speed) => {
				setValue({ playbackRate: parseFloat(speed) });
				onChange(transformEvent({ ...value,
					playbackRate: parseFloat(speed) }));
			} }
			onEnded={ () => {
				setValue({ playing: value.loop });
			} }
			onEnablePIP={ () => {
				setValue({ pip: true });
				onChange(transformEvent({ ...value, pip: true }));
			} }
			onDisablePIP={ () => {
				setValue({ pip: false });
				onChange(transformEvent({ ...value, pip: false }));
			} }
		/>
	);
};

export default VideoPlayer;
