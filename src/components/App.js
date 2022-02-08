import { Box, Paper } from "@mui/material";
import { initialState, reducer } from "../store/reducer";
import { selectPair, setPairs } from "../store/actions";
import { useCallback, useEffect, useReducer } from "react";

import Header from "./Header/Header";
import { OrderBookContext } from "../contexts/OrderBookContext";
import OrderTables from "./OrderTables/OrderTables";
import { ThemeProvider } from "@mui/material/styles";
import { filterTradingPairs } from "../utils/helpers";
import { theme } from "../utils/theme";
import { usePairUrl } from "../hooks/usePairUrl";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetch("https://api.binance.com/api/v3/exchangeInfo")
			.then((response) => response.json())
			.then(filterTradingPairs)
			.then((pairs) => dispatch(setPairs(pairs)));
	}, []);

	const usePairUrlHandler = useCallback((pair) => {
		dispatch(selectPair(pair));
	}, []);

	usePairUrl(state.pairs, usePairUrlHandler);

	return (
		<ThemeProvider theme={theme}>
			<Box m={3}>
				<Paper elevation={2}>
					<Box p={5}>
						<OrderBookContext.Provider value={{ state, dispatch }}>
							<Header />
							<OrderTables />
						</OrderBookContext.Provider>
					</Box>
				</Paper>
			</Box>
		</ThemeProvider>
	);
}

export default App;
