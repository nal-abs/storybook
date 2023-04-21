import QrScanner from 'qr-scanner';

const QrManager = {
	getImageData: async ({ state }) => {
		const result = state.file && await QrScanner.scanImage(state.file,
			{ returnDetailedScanResult: false })
			.catch((error) => ({ error }));

		return {
			...state,
			data: result?.data,
			error: result?.error,
		};
	},

};

export default QrManager;
