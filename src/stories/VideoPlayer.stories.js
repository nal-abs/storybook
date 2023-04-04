/* eslint-disable no-console */
import * as React from 'react';
import VideoPlayer from '../stories/common/VideoPlayer';

export default {
	title: 'stories/videoPlayer',
	component: VideoPlayer,
};

const Template = (args) => <VideoPlayer { ...args }/>;

export const videoPlayer = Template.bind({});

videoPlayer.args = {
	url: 'https://youtu.be/D-rHu8vxrHI',
	pip: false,
	playing: false,
	loop: false,
	controls: true,
	light: false,
	volume: 0,
	muted: false,
	playbackRate: 1.0,
	value: {
		url: 'https://youtu.be/D-rHu8vxrHI',
		pip: false,
		ready: '',
		start: '',
		playing: true,
		controls: false,
		light: false,
		volume: 0.8,
		muted: false,
		played: 0,
		loaded: 0,
		duration: 0,
		playbackRate: 1.0,
		loop: false,
	},
	onChange: ({ target }) => console.log(target.value),
};
