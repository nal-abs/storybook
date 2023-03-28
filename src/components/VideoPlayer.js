import React from 'react';
import ReactPlayer from 'react-player/lazy';

// Lazy load the YouTube player
const VideoPlayer = ({ url }) =>
	<ReactPlayer url={ url }/>;

export default VideoPlayer;
