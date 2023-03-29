import * as React from 'react';
import VideoPlayer from '../stories/common/VideoPlayer';

export default {
	title: 'stories/videoPlayer',
	component: VideoPlayer,
};

const Template = (args) => <VideoPlayer { ...args }/>;

export const videoPlayer = Template.bind({});

videoPlayer.args = {
	url: '',
	playing: false,
	loop: false,
	controls: false,
	light: false,
	volume: 0,
	muted: false,
	playbackRate: 1,
	width: '',
	height: '',
	style: {},
	progressInterval: 1000,
	playsinline: false,
	pip: false,
	stopOnUnmount: true,
	fallback: null,
	// wrapper: false,
	// playIcon: false,
	previewTabIndex: 0,
	// config: false,
};
