
const SplashScreenManager = {
	setSplashTimeout: ({ config: { milliseconds }, actions }) =>
		setTimeout(() => actions.endLoading(), milliseconds),

};

export default SplashScreenManager;
