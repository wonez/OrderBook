import { useEffect } from "react";

export const usePairUrl = (pairs, callback) => {
	useEffect(() => {
		const path = window.location.pathname.substring(1);
		if (path) {
			const pairFormat = path.replace("_", " / ");
			const pair = pairs.find((pair) => pair === pairFormat);
			if (pair) callback(pair);
		} else {
			callback("BTC / USDT");
		}
	}, [pairs, callback]);
};
