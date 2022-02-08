import { useEffect, useState } from "react";

const DEPTH = 50;

export const useTableData = (pair) => {
	const [asks, setAsks] = useState([]);
	const [bids, setBids] = useState([]);

	useEffect(() => {
		let socket;

		setAsks([]);
		setBids([]);

		(async () => {
			socket = new WebSocket(
				`wss://stream.binance.com:9443/ws/${pair
					.replace(" / ", "")
					.toLowerCase()}@depth`
			);
			socket.onmessage = (msg) => {
				const { a, b } = JSON.parse(msg.data);

				if (a.length > 0) {
					setAsks((prev) => [...a, ...prev].slice(0, DEPTH));
				}

				if (b.length > 0) {
					setBids((prev) => [...b, ...prev].slice(0, DEPTH));
				}
			};
		})();

		return () => {
			if (socket.close) {
				socket.close();
			}
		};
	}, [pair]);

	return { asks, bids };
};
