import { SELECT_DECIMAL, SELECT_PAIR, SELECT_TABLE, SET_PAIRS } from "./types";

export const initialState = {
	pairs: ["BTC / USDT"],
	pair: "BTC / USDT",
	decimals: [0, 1, 2, 3, 4, 5, 6, 7, 8],
	decimal: 8,
	tables: ["Buy", "Sell", "Buy & Sell"],
	table: "Buy & Sell",
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_PAIRS:
			return {
				...state,
				pairs: action.pairs,
			};
		case SELECT_PAIR:
			return {
				...state,
				pair: action.pair,
			};
		case SELECT_DECIMAL:
			return {
				...state,
				decimal: action.decimal,
			};
		case SELECT_TABLE:
			return {
				...state,
				table: action.table,
			};
		default:
			return state;
	}
}
