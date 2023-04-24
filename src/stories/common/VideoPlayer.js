import { map, omit, values } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';
import { nothing } from '@laufire/utils/fn';
import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const buildEvent = (value) => ({
	target: {
		value,
	},
});

const data = {
				onReady:{ status: 'ready' },
				onStart: { status: 'playing' },
				onPlay: { status: 'playing' },
				onPause: { status: 'paused' },
				onBuffer: { status: 'buffering' },
				onBufferEnd:{ status: 'playing' },
				onError: { status: 'error' },
				onEnded: { status: 'ended' },
				onClickPreview:{ mode: 'full' },
				onEnablePIP: { pip: true },
				onDisablePIP: { pip: false },
}

const VideoPlayer = ({ onChange = nothing, value: initialValue }) => {
	const { mode, status, ...rest } = initialValue;
	const playerProps = omit(rest, { played: 'played', loaded: 'loaded' });
	const light = mode === 'light';
	const playing = status === 'playing';
	const [value, setValue] = useState(initialValue);

	const patchValue = (data) => {
		const newValue = { ...value, ...data };

		setValue(newValue);
		onChange(buildEvent(newValue));
	};
	const playerEvents = map(data,(value,key) => ()=>patchValue(value));

	return (
		<ReactPlayer
			{ ...{
				...playerProps,
				light: light,
				playing: playing,
				...playerEvents,
				onSeek: () => patchValue({ played: value.played }),
				onProgress: (state) => patchValue({
					played: state.playedSeconds,
					loaded: state.loadedSeconds,
				}),
				onDuration: (duration) => patchValue({ duration }),
				onPlaybackRateChange: (speed) =>
					patchValue({ playbackRate: parseFloat(speed) }),

			} }
		/>
	);
};

export default VideoPlayer;
