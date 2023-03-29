import React from 'react';
import ReactPlayer from 'react-player/lazy';

// Lazy load the YouTube player
const VideoPlayer = (props) =>
	<ReactPlayer
		{ ...props }
	/>;

export default VideoPlayer;
