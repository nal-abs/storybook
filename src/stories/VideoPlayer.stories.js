/* eslint-disable no-console */
import * as React from 'react';
import VideoPlayer from '../stories/common/VideoPlayer';
import video from '../../src/assets/video.mp4';

const url = video ;

export default {
	title: 'stories/videoPlayer',
	component: VideoPlayer,
};

const Template = (args) => <VideoPlayer { ...args }/>;

export const videoPlayer = Template.bind({});

videoPlayer.args = {
	url: url,
	pip: false,
	playing: false,
	loop: false,
	controls: true,
	light: false,
	volume: 0,
	muted: false,
	playbackRate: 1.0,
	value: {
		url: url,
		pip: false,
		ready: '',
		start: '',
		playing: true,
		controls: false,
		light: false,
		volume: 0.8,
		muted: false,
		progress: {
			played: 0,
			loaded: 0,
			playedSeconds: 0,
			loadedSeconds: 0,
		},
		duration: 0,
		playbackRate: 1.0,
		loop: false,
	},
	onChange: ({ target }) => console.log(target.value),
};
