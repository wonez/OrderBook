export const filterTradingPairs = (data) =>
	data.symbols
		.filter((item) => item.status === "TRADING")
		.map(({ baseAsset, quoteAsset }) => `${baseAsset} / ${quoteAsset}`);
