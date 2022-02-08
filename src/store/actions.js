import { SELECT_DECIMAL, SELECT_PAIR, SELECT_TABLE, SET_PAIRS } from "./types";

export function setPairs(pairs) {
	return {
		type: SET_PAIRS,
		pairs,
	};
}

export function selectPair(pair) {
	const assets = pair.split(" / ");
	const newUrl = window.location.origin + `/${assets[0]}_${assets[1]}`;
	window.history.pushState(null, "", newUrl);

	return {
		type: SELECT_PAIR,
		pair,
	};
}

export function selectDecimal(decimal) {
	return {
		type: SELECT_DECIMAL,
		decimal,
	};
}

export function selectTable(table) {
	return {
		type: SELECT_TABLE,
		table,
	};
}
