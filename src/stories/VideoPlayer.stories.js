import * as React from 'react';
import ReactVideoPlayer from '../stories/common/VideoPlayer';
import video from '../../src/assets/video.mp4';

const url = video;
const component = {
	title: 'Display/Video Player',
	component: ReactVideoPlayer,
};

export default component;

const Template = ({ ...value }) =>
	<ReactVideoPlayer { ...{ value } }/>;

export const VideoPlayer = Template.bind({});

VideoPlayer.args = {
	url: url,
	status: 'unknown',
	mode: 'light',
	loop: false,
	controls: true,
	volume: 0.5,
	muted: false,
	pip: false,
	played: 0,
	loaded: 0,
	duration: 0,
	playbackRate: 1.0,
};
