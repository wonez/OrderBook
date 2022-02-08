import { Autocomplete, Box, TextField } from "@mui/material";

import { OrderBookContext } from "../../../utils/OrderBookContext";
import { selectPair } from "../../../store/actions";
import { useContext } from "react";

function PairSelector() {
	const {
		state: { pair, pairs },
		dispatch,
	} = useContext(OrderBookContext);

	const handleChange = (_, value) => {
		dispatch(selectPair(value));
	};

	return (
		<Box sx={{ width: 150 }}>
			<Autocomplete
				disablePortal
				options={pairs}
				autoHighlight
				autoComplete
				value={pair}
				disableClearable
				onChange={handleChange}
				renderInput={(params) => <TextField {...params} label="Pair" />}
			/>
		</Box>
	);
}

export default PairSelector;
