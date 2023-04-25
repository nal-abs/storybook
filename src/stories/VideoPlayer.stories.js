import * as React from 'react';
import VideoPlayer from '../stories/common/VideoPlayer';
// import video from '../../src/assets/video.mp4';
import { peek } from '@laufire/utils/debug';

const url = 'https://youtu.be/w7ejDZ8SWv8' ;
const component = {
	title: 'stories/videoPlayer',
	component: VideoPlayer,
};

export default component;

const Template = ({ onChange, ...value }) =>
	<VideoPlayer { ...{ onChange, value } }/>;

export const videoPlayer = Template.bind({});

videoPlayer.args = {
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
	onChange: ({ target }) => peek(target.value),
};
