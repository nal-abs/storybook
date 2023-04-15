/* eslint-disable no-console */
import * as React from 'react';
import VideoPlayer from '../stories/common/VideoPlayer';
import video from '../../src/assets/video.mp4';

const url = video ;

export default {
	title: 'stories/videoPlayer',
	component: VideoPlayer,
};

const Template = ({ ...value }) =>
	<VideoPlayer { ... value }/>;

export const videoPlayer = Template.bind({});

videoPlayer.args = {
	url: url,
	status: undefined,
	playing: false,
	loop: false,
	controls: true,
	light: false,
	volume: 0,
	muted: false,
	pip: false,
	played: 0,
	loaded: 0,
	duration: 0,
	playbackRate: 1.0,
	onChange: ({ target }) => console.log(target.value),
};
